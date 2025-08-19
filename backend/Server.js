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

// ++++++++++++++++ To put the data into the 8081 port +++++++++++++++++++
app.get("/", (req, res) => {
  const sql = "select * from customer order by id desc";

  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });

});

// +++++++++++++++++++++++++++ login +++++++++++++++++++++++++++++++++
app.post("/login", (req, res) => {
  const sql = "select * from signup where username = ? AND password = ?";
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

// +++++++++++++++++++ Add Customer ++++++++++++++++++++++
app.post("/customer", (req, res) => {
  fetch("http://localhost:8081/")
    .then((data) => {
      return data.json();
    })
    .then((data) => {

      let latest_id = data.length > 0 ? data[0].id + 1 : 1;
      
      const sql = "INSERT INTO customer (id, name, amount) VALUES(?)";
      const values = [latest_id, req.body.name, req.body.amount];

      db.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
      });
    });
});

// ++++++++++++++++++++++++++++ Sign Up ++++++++++++++++++++++++++++++++++++
app.post("/signup", (req, res) => {
      const sql = "INSERT INTO signup (firstname, lastname, email, mob, username, password) VALUES (?, ?, ?, ?, ?, ?)";
      const values = [req.body.firstname, req.body.lastname, req.body.email, req.body.mob, req.body.username, req.body.password];

      db.query(sql, values, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
      });
});

// ++++++++++++++++++++ Read link +++++++++++++++++++++++++++
app.get("/read/:id", (req, res) => {
  const sql = "select * from customer where id = ?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});


// ++++++++++++++++++++++++++++++ update button ++++++++++++++++++++++++++++++++
app.put('/read/:id', (req, res) => {
  const id = req.params.id;
  const values = req.body;

  const sql = "update customer set ? where id = ?"
  db.query(sql, [values, id], (err, result) => {
    if(err) {
      console.log(err);
      return res.status(500).json({error: "Database update failed"})
    }
    res.json({message: "Record updated successfully", result})
  })
})

// ++++++++++++++++++++++++++++++ delete button ++++++++++++++++++++++++++++++++
app.delete('/read/:id', (req, res) => {

  const id = req.params.id;
  const  sql = "delete from customer where id = ?"

  db.query(sql, id, (err, result) => {
    if(err) {
      console.log(err);
      return res.json({error: "Database Deletation Failed"})
    }  
    return res.json("Deleted Successfully")

  })
})

// ++++++++++++++ Listening to the port +++++++++++++++
app.listen(8081, () => {
  console.log("Listening..");
});
