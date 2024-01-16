const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host:"localhost",
    user:"mac2work",
    database:"silownia",
    password:"mac2work"
});

connection.connect((err) => {
    if(err) throw err;
    console.log("connected!")
})


app.post("/", (req, res) => {
    const smh = req.body;
    connection.query("", (err, result) => {
        if (err) throw err;
        res.json(result);
    })
});
app.get();
app.put();
app.delete();

app.listen(5000);