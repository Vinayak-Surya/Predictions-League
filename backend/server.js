var mysql = require("mysql");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = 7800;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json({limit: '150mb'}));
app.use(express.urlencoded({limit: '150mb'}));
app.use(cors());

var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "predictions_league",
});

pool.getConnection(function (err) {
  if (err) console.log(err);
  console.log("Connected!");
});

app.post("/addUser", function (req, res) {
  // console.log("---inside post", req.body);
  pool.getConnection(function (err, connection) {
    if (err) {
      console.log("connection issues");
      res.status(500).send("DB connection error");
    }
    // console.log("-------" + req.body);
    let val = [
      [
        req.body.name,
        req.body.username,
        req.body.email,
        req.body.password,
        req.body.team,
        req.body.dob
      ],
    ];
    connection.query(
      "INSERT INTO users (name,username,email,password,team,dob) VALUES ?",
      [val],
      function (error, results, fields) {
        connection.release();
        if (error) {
          console.log(error);
          // res.status(500).send(error);
          res.status(500).send({errorMessage: "Username already exists!"});
        }
        res.send(results);
        //res.send({ message: "Succesfully Added to DB" })
      }
    );
  });
});

app.post("/api/login", (req, res) => {
  pool.getConnection((err, connection) => {
    console.log("inside api login")
    if (err) {
      console.log("connection issues");
      res.status(500).send("DB connection error");
    }
    else {
      // console.log(req.body);
      let username = req.body.username;
      let password = req.body.password;
      console.log(username, '+', password);
      connection.query(
        "SELECT * from users where username=? and password=?",
        [username, password],
        (error, results, fields) => {
          connection.release();
          if (error) {
            console.log(error);
            res.status(500).send(error);
          }
          console.log(results);
          if(results.length != 0) {
            res.send({auth: true});
          } else {
            res.send({auth: false});
          }
        }
      );
    }
  });
});

app.get("/api/profile/:username", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log("connection issues");
      res.status(500).send("DB connection error");
    }
    else {
      let username = req.params["username"];
      console.log(username);
      connection.query(
        "SELECT name, email, dob, total_score, team from users where username=?",
        [username],
        (error, results, fields) => {
          connection.release();
          if (error) {
            console.log(error);
            res.status(500).send(error);
          }
          console.log(results);
          res.send(results);
        }
      );
    }
  });
});

app.post("/api/fixtures", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log("connection issues");
      res.status(500).send("DB connection error");
    }
    else {
      console.log(req.body.matches,req.body.matches.length);
      connection.query(
        "Insert into results (gameweek, match_id, home_team, away_team, h_goals, a_goals, goal_diff, status) values ?",
        [req.body.matches],
        (error, results, fields) => {
          connection.release();
          if (error) {
            console.log(error);
            res.status(500).send(error);
          }
          console.log(results);
          res.send(results);
        }
      )
      //res.send(200).json({matchday:c})
    }
})
})  

app.get("/api/getFixtures", (req, res) => {
  pool.getConnection((err, connection) => {
    if(err) {
      console.log("Connection issues");
      res.status(500).send("DB connection error");
    }
    else {
      // console.log(req.query.matchday);
      let gw = req.query.matchday;
      connection.query(
        "Select match_id, home_team, away_team from results where gameweek=?",
        [gw],
        (error, results, fields) => {
          connection.release();
          if (error) {
            console.log(error);
            res.status(500).send(error);
          }
          // console.log(results);
          res.send(results);
        }
      )
    }
  })
})

app.post("/api/addPrediction", (req, res) => {
  pool.getConnection((err, connection) => {
    if(err) {
      console.log("Connection issues");
      res.status(500).send("DB connection error");
    }
    else {
      let val = [
        [
          req.body.homeGoals,
          req.body.awayGoals,
          req.body.goalDiff,
          req.body.matchId,
          req.body.username
        ]
      ];
      let query = "insert into predictions (h_goals, a_goals, goal_diff, match_id, username) values ?";
      connection.query(
        "select * from predictions where match_id=? and username=?",
        [req.body.matchId, req.body.username],
        (err, results, fields) => {
          // console.log(results);
          if(results.length) {
            query = "update predictions set h_goals=?, a_goals=?, goal_diff=? where match_id=? and username=?";
            connection.query(
              query,
              [req.body.homeGoals,
              req.body.awayGoals,
              req.body.goalDiff,
              req.body.matchId,
              req.body.username],
              (error, results, fields) => {
                if (error) {
                  console.log(error);
                  res.status(500).send(error);
                }
                console.log(results);
                res.send(results);
              }
            )
          }
          else {
            connection.query(
              query,
              [val],
              (error, results, fields) => {
                connection.release();
                if (error) {
                  console.log(error);
                  res.status(500).send(error);
                }
                console.log(results);
                res.send(results);
              }
            )
          }
        }
      )
    }
  })
})

app.listen(port, () => console.log(`Server listening on port ${port}.....`));
