const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();
const items = ["Buy Food","Eat Food","Sleep"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function (req,res) {
    const day = date.getDate(); //Permet de chercher la fonction getDate() dans le fichier date.js

    res.render("list",{listTitleDay: day,newListItems:items});
})

app.post("/",function (req,res) {
    const item = req.body.newItem; 
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work"); 
    }else{
        items.push(item);
        res.redirect("/"); 
    }
})

app.get("/work",function (req,res) {
    res.render("list",{
        listTitleDay:"Work List",
        newListItems: workItems
    }); 
})

app.post("/work ",function (req,res) {
    let item = req.body.newItem; 
    workItems.push(item);
    res.redirect("/work");   
})

app.listen(3000,function () {
    console.log("Your server is running on port 3000");
})

