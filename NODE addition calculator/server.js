//jshint esversion:6
const express = require("express"); 
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));  //Necessary code that always be added while using bodyParser.

app.get("/",function(req,res){
        res.send(__dirname + "/index.html");
})

app.post("/" , function(req,res){
        var num1 = Number(req.body.n1);
        var num2 = Number(req.body.n2);
        var result = num1 + num2;

        res.send("The sum of the numbers are" + result);
});


app.listen(3000 , function(req,res){
        console.log("Server starte on port 3000")
})

