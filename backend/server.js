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
      console.log(req.body);
      let username = req.body.username;
      let password = req.body.password;
      connection.query(
        "SELECT * from users where username=? and password=?",
        [username, password],
        (error, results, fields) => {
          connection.release();
          if (error) {
            console.log(error);
            res.status(500).send(error);
          }
          // console.log(results);
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

app.listen(port, () => console.log(`Server listening on port ${port}.....`));
