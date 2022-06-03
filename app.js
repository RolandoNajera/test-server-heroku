const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => res.send("cool!"))

app.listen(process.env.PORT || '8080', () => console.log("runing!"))

