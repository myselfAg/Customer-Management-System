const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
app.use(cors());
app.use(express.json());

// ++++++++++++ To connect with the Database ++++++++++++++++
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "master",
})

// ++++++++++++++++ To put the data into the 8081 port +++++++++++++++++++
app.get("/", (req, res) => {
  const sql = "select * from customer order by id desc";

  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

// wait
app.get("/login", (req, res) => {
  const sql = "select * from signup where username = ?";
  const values = [req.body.username];
  console.log(values);
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
// +++++++++++++++++++ Insert data into the database (Create.js) ++++++++++++++++++++++

app.post("/customer", (req, res) => {
  fetch("http://localhost:8081/")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let latest_id = data[0].id;
      console.log(latest_id);

      latest_id = latest_id + 1;
      console.log(latest_id);

      const sql = "INSERT INTO customer (id, name, amount) VALUES(?)";
      const values = [latest_id, req.body.name, req.body.amount];

      db.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
      });
    });
});

app.get('/read/:id', (req, res) => {
  const sql = "select * from customer where id = ?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if(err) return res.json("Error");
    return res.json(data);
  });
});

// ++++++++++++++ Listening to the port +++++++++++++++
app.listen(8081, () => {
  console.log("Listening..");
});
