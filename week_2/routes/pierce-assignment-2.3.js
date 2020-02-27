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

var express = require("express");
var http = require("http");
var app = express();
app.get("/", function(request, response){
  response.end("Welcome to the Homepage!");
});

app.get("/about", function(request,response){
  response.end("Welcome to the About Page!");
});

app.get("/contact", function(request,response){
  response.end("Welcome to the Contact Page!");
});

app.use(function(request,response){
  response.statusCode = 404;
  response.end("404!");
});

http.createServer(app).listen(8080);
