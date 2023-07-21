
/*jshint esversion: 6 */

const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname  +   "/date.js");             //local module
const app = express()

var items= [];
var workItems=[];

app.set('view engine', 'ejs');                               //ejs-protocol

app.use(bodyParser.urlencoded({extended:true}));             //body-parser-protocol

app.use(express.static("public"));                           // use for static folder usage


app.listen(3000, function () {                              // run 3000 port to update you whether app running or not
    console.log("Server Started on port 3000");
})

app.get("/", function (req, res) {                          // When we load server what is getting to the website ?             


    res.render('lists', { listTitle: day , newListItems:items });  //Here it render the list.ejs page on get method 
})

app.post("/" , function(req,res){                           

    var item =req.body.newItem;
    var options = {
        weekDay: "long",
        day: "numeric",
        month:"long"
    };
    
    var day= today.toLocaleDateString("en-US" , options);
    

    if(req.body.list=="Work")
    {
        workItems.push(item);
        res.redirect("/work");
    }
    else
    {
        items.push(item);
       res.redirect("/");
    }

    console.log(req.body);
     
})

app.get("/work" , function(req,res){

    res.render("lists",{listTitle: "Work Lists" , newListItems:workItems});
})

app.post("/work" , function(req,res){

})

app.get("/about" ,function(req,res){
    res.render("about");
})
