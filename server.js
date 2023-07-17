 const express = require('express');
const bodyParser=require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/" , function(request,response){

        response.sendFile(__dirname + "/index.html")
}) 

app.get("/contact",function(req,res){
    res.send("number likho")})

app.post("/" , function(req,res) {

    var num1=   Number(req.body.n1);
    var num2 =  Number(req.body.n2);
    var result= num1+num2;
    res.send("Calculation is "+result);

    
   })

app.listen(3000 , function(){
     console.log("server started on port 3000");
})
