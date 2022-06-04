require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db");
const User = require('./User');

dbConnection()

const app = express();
app.use(cors());

app.get("/", (req, res) => res.send("cool!"));
app.get("/users", async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

app.listen(process.env.PORT || '8080', () => console.log("server runing!"))

