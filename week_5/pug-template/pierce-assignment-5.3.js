/*
============================================
; Title: Assignment 5.3
; Author: Kimberly Pierce
; Date: 16 March 2020
; Modified By: Kimberly Pierce
; Description: Pug Templates
;===========================================
*/

const header = require('../../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 5.3") + " \n ");
//required modules
var express = require("express");
var http = require("http");
var path = require ("path");
var pug = require ("pug");

var app = express();
//find views, use pug
app.set ("views", path.resolve(__dirname, "views"));
app.set ("view engine", "pug");
//display index and message
app.get("/", function(request, response){
  response.render("index",{
    message:"Pug is Great!"
  });
});
//start server
http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080");
});
