const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Agneesh@My@Database25",
  database: "mydb",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM customer ORDER BY sl DESC";

  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.post("/customer", (req, res) => {
  fetch("http://localhost:8081/")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let latest_sl = data.length > 0 ? data[0].sl + 1 : 1;
      const now = new Date();
      const today = now.toISOString().slice(0, 19).replace("T", " ");

      const sql =
        "INSERT INTO customer (sl, name, productid, amount, country, city, contact, date) VALUES(?)";
      const values = [
        latest_sl,
        req.body.name,
        req.body.productid,
        req.body.amount,
        req.body.country,
        req.body.city,
        req.body.contact,
        today,
      ];

      db.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
      });
    });
});

app.post("/signup", (req, res) => {
  const sql =
    "INSERT INTO signup (firstname, lastname, email, mob, username, password) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.mob,
    req.body.username,
    req.body.password,
  ];

  db.query(sql, values, (err, result) => {
    if (err) return res.json(err);
    return res.json("Account Created");
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM signup WHERE username = ? AND password = ?";
  const values = [req.body.username, req.body.password];
  db.query(sql, values, (err, data) => {
    if (err) return res.status(500).json({ error: "Database error" });

    if (data.length > 0) {
      res.json({ success: true, user: data[0] });
    } else {
      res.json({ success: false, message: "Invalid username or password" });
    }
  });
});

app.get("/read/:sl", (req, res) => {
  const sql = "SELECT * FROM customer WHERE sl = ?";
  const sl = req.params.sl;

  db.query(sql, [sl], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.put("/read/:sl", (req, res) => {
  const sl = req.params.sl;
  let values = { ...req.body };

   delete values.date;

  const sql = "UPDATE customer SET ? WHERE sl = ?";
  db.query(sql, [values, sl], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database update failed" });
    }
    res.json({ message: "Record updated successfully", result });
  });
});

app.delete("/read/:sl", (req, res) => {
  const sl = req.params.sl;
  const sql = "DELETE FROM customer WHERE sl = ?";

  db.query(sql, [sl], (err, result) => {
    if (err) {
      console.log(err);
      return res.json({ error: "Database Deletation Failed" });
    }
    return res.json("Deleted Successfully");
  });
});

app.listen(8081, () => {
  console.log("Listening..");
});
