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

app.post("/api/updateScores", (req, res) => {
  pool.getConnection((err, connection) => {
    if(err) {
      console.log("Connection issues");
      res.status(500).send("DB connection error");
    }
    else {
      console.log(req.body.matches, req.body.matches.length);
      for(let i = 0; i < req.body.matches.length; i++) {
        connection.query(
          "update results set h_goals=?, a_goals=?, goal_diff=? , status=? where match_id=?",
          [
            req.body.matches[i].score.fullTime.homeTeam,
            req.body.matches[i].score.fullTime.awayTeam,
            req.body.matches[i].score.fullTime.homeTeam - req.body.matches[i].score.fullTime.awayTeam,
            req.body.matches[i].status,
            req.body.matches[i].id,
          ],
          (error, results, fields) => { 
          // connection.release();
            if (error) {
              console.log(error);
              res.status(500).send(error);
            }
            console.log(results);
            // res.send(results);
          }
        )
      }
    }
    connection.release();
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
app.get("/api/getLeaderboard", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log("Connection issues");
      res.status(500).send("DB connection error");
    }
    else {
      connection.query(
        "SELECT @curRank := @curRank + 1 as rank, username,name,total_score FROM users u, (SELECT @curRank := 0) r where username<>'admin' ORDER BY  total_score desc",
        
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

app.get("/api/getUserPredictions", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log("Connection issues");
      res.status(500).send("DB connection error");
    }
    else {
      console.log(req)
      connection.query(
        "select * from predictions as p join results as r where r.match_id=p.match_id and p.username=? and r.gameweek=?",
        [req.query.username, req.query.gameweek],
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
  })
})

app.get("/api/getGameweekScores", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log("Connection issues");
      res.status(500).send("DB connection error");
    }
    else {
      connection.query(
        "SELECT gameweek,gw_score FROM gw_total where username=?",
        [req.query.username],
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
      let query = "insert into predictions (pred_home_goals, pred_away_goals, pred_gd, match_id, username) values ?";
      connection.query(
        "select * from predictions where match_id=? and username=?",
        [req.body.matchId, req.body.username],
        (err, results, fields) => {
          // console.log(results);
          if(results.length) {
            query = "update predictions set pred_home_goals=?, pred_away_goals=?, pred_gd=? where match_id=? and username=?";
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
                // connection.release();
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
      connection.release();
    }
  })
})

function calculateScore(h, a, gd, ph, pa, pgd) {
  let score = 0;
  if(h === ph && a === pa) {
    if(Math.abs(gd) > 3) {
      score = 10;
    }
    else {
      score = 5;
    }
  }
  else if(gd === pgd) {
    if(Math.abs(gd) > 0) {
      score = 3;
    }
    else {
      score = 2;
    }
  }
  else {
    if((h > a && ph > pa) || (h < a && ph < pa)) {
      score = 2;
    }
    else {
      score = 0;  
    }
  }
  return score;
}

app.post("/api/calculatePoints", (req, res) => {
  // select * from predictions where status = "Not Calculated"  --> view
  // join with results table using match_id --> view
  // select * from 2nd view and store as array 
  // map array and send stuff to calScore function which will return the score
  // inside array get the score in a var and insert into points table with necessary info
  // set all rows to be "calculated" in predictions
  pool.getConnection((err, connection) => {
    if(err) {
      console.log("Connection issues");
      res.status(500).send("DB connection error");
    }
    else {
      connection.query(          // not calculated predictions are to be calculated
        "select * from predictions as p join results as r where r.match_id=p.match_id and p.pred_status='Not Calculated' and r.status='FINISHED'",
        (error, results, fields) => {
          // connection.release();
          if (error) {
            console.log(error);
            res.status(500).send(error);
          }
          // console.log(results);
          // res.send(results);
          for(let i = 0; i < results.length; i++) {
            let score = calculateScore(results[i].h_goals, results[i].a_goals, results[i].goal_diff, results[i].pred_home_goals, results[i].pred_away_goals, results[i].pred_gd)
            let val = [
              [
                results[i].gameweek, results[i].match_id, results[i].username, score
              ],
            ];
            connection.query(            // inserting into points table after calc score
              "insert into points (gameweek, match_id, username, score) values ?",
              [val],
              (error, points, fields) => {
                // connection.release();
                if (error) {
                  console.log(error);
                  res.status(500).send(error);
                }
                console.log(points);
                // res.send(points);
              }
            )

            connection.query(           // updating status of the prediction to calculated
              "update predictions set pred_status='Calculated' where match_id=? and username=?",
              [results[i].match_id, results[i].username],
              (error, pred, fields) => {
                // connection.release();
                if (error) {
                  console.log(error);
                  res.status(500).send(error);
                }
                console.log(pred);
                // res.send(points);
              }
            )

            let query = "insert into gw_total (gameweek, username, gw_score) values ?";
            let val2 = [
              [results[i].gameweek, results[i].username, score],
            ]
            connection.query(        // update or insert into gw_total
              "select * from gw_total where gameweek=? and username=?",
              [results[i].gameweek, results[i].username],
              (err, gw, fields) => {
                // console.log(results);
                if(gw.length) {
                  query = "update gw_total set gw_score=gw_score+? where gameweek=? and username=?";
                  connection.query(
                    query,
                    [score, results[i].gameweek, results[i].username],
                    (error, r, fields) => {
                      if (error) {
                        console.log(error);
                        res.status(500).send(error);
                      }
                      console.log(r);
                      // res.send(r);
                    }
                  )
                }
                else {
                  connection.query(
                    query,
                    [val2],
                    (error, r, fields) => {
                      // connection.release();
                      if (error) {
                        console.log(error);
                        res.status(500).send(error);
                      }
                      console.log(r);
                      // res.send(r);
                    }
                  )
                }
              }
            )

            connection.query(           // update score (total_score) in the users table 
              "update users set total_score=total_score+? where username=?",
              [score, results[i].username],
              (error, totalPoints, fields) => {
                // connection.release();
                if (error) {
                  console.log(error);
                  res.status(500).send(error);
                }
                console.log(totalPoints);
                // res.send(totalPoints);
              }
            )
          }
        }
      )
      connection.release();
    }
  })
})


app.listen(port, () => console.log(`Server listening on port ${port}.....`));
