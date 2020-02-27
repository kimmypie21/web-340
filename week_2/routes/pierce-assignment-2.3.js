/*
============================================
; Title: Assignment 2.3
; Author: Kimberly Pierce
; Date: 27 February 2020
; Modified By: Kimberly Pierce
; Description: Routes
;===========================================
*/

const header = require('../../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 2.3") + " \n ");

//require express module
var express = require("express");
var http = require("http");
var app = express();//calls the express function to start a new express app

//even handler for homepage message
app.get("/", function(request, response){
  response.end("Welcome to the Homepage!");
});

//event handler for about page message
app.get("/about", function(request,response){
  response.end("Welcome to the About Page!");
});

//event handler for contact page
app.get("/contact", function(request,response){
  response.end("Welcome to the Contact Page!");
});

//event handler for 404 error
app.use(function(request,response){
  response.statusCode = 404;
  response.end("404!");
});

//create server on local host 8080
http.createServer(app).listen(8080);
