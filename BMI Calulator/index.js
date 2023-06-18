const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000 , function (req,res){
    console.log("Server started on port 3000");
});

app.get("/", function(req,res){
    res.sendFile(__dirname+ "/bmiCalculator.html");
});

app.post("/", function(req,res){

    var weight = req.body.w1;
    var height = req.body.h1;
    var result = weight/((height)*(height));

    res.send("Your Body mass index is " + result);

});