/*
============================================
; Title: Assignment 2.4
; Author: Professor Krasso
; Date: 27 February 2020
; Modified By: Kimberly Pierce
; Description: EJS Views
;===========================================
*/

const header = require('../../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 2.4") + " \n ");

var http = require("http");
var express = require("express");
var path = require("path");
var app = express();

app.set("views",path.resolve(__dirname,"views"));//tell express where to find views
app.set('view engine', 'ejs');//tell express to use ejs views
app.get("/", function(request,response){//message response
  response.render("index",{
    message: "Kimberly Pierce, 12345 Main Drive Knoxville, TN "
  });
});

http.createServer(app).listen(8080, function(){//start server on localhost
  console.log("EJS-Views app started on port 8080.");
});


