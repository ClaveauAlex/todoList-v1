const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/",function (req,res) {
    res.send("HelloWorld");
})

app.listen(3000,function () {
    console.log("Your server is running on port 3000");
})

