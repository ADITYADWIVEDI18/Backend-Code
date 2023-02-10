/*jshint esversion: 6 */

const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.set('view engine', 'ejs');


app.listen(3000, function () {
    console.log("Server Started on port 3000");
})

app.get("/", function (req, res) {

    var today = new Date();
    var day = "";
    var currentDay = today.getDay();


    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;

        case 1:
            day = "Monday";
            break;

        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }

    res.render('lists', { kindOfDay: day });
})

