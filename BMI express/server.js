//jshint esversion: 6 

const express=require('express');

const bodyParser=require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000 , function(){
    console.log("server started on port 3000");
})

app.get("/" , function(request,response){

    response.sendFile(__dirname + "/index.html")
})

app.post("/" , function(req,res) {


    var wolo =Number(req.body.weights);
    var feets=Number(req.body.feet);
    var inc=Number(req.body.inch);
    var result = Number(((feets*12) + inc)*0.0254);
    
    var finalres=   Number(result*result);
    var result = Number(wolo / finalres);
    
    res.send("Calculation is "+ result);

})
