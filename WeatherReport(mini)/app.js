const express = require("express")
const app = express()
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));  //this is just necessary code for us to be able to start parsing through the body of the post request
const https =   require("https")

app.get("/",function(req,res){

    res.sendFile(__dirname + "/index.html");
    

})

app.post("/", function(req,res){

    
    const query= req.body.cityName;
    const apiKey="123e19067e20e14a7a86e436ee24cdaa";
    const unit = "metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q=" + query +"&appid=" + apiKey +"&units=" + unit;

    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){

            const weatherData = JSON.parse(data);
            
            const tempe =weatherData.main.temp;
            
            res.write("<h3> By Aditya Dwivedi </h3>");
            res.write("<h1>The weather temperature is "+ tempe +"</h1>");
            res.send();


        })
    })
})

app.listen(3000,function(){
    console.log("Server is running on the port 3000.");
})




