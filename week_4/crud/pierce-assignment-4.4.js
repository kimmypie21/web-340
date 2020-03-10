/*
============================================
; Title: Assignment 4.4
; Author: Kimberly Pierce
; Date: 10 March 2020
; Modified By: Kimberly Pierce
; Description: cURL
;===========================================
*/

const header = require('../../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 4.4") + " \n ");

var express = require("express");
var http = require ("http");

var app = express();

app.get("/", function(request, response){
  response.send("This is a GET request");
});

app.post("/", function(request,response){
  response.send("This is a POST request");
});

app.put("/", function(request,response){
  response.send("This is a PUT request");
});

app.delete("/", function(request,response){
  response.send("This is a DELETE request");
});

http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080");
});
