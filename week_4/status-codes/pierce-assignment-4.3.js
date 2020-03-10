/*
============================================
; Title: Assignment 4.3
; Author: Kimberly Pierce
; Date: 10 March 2020
; Modified By: Kimberly Pierce
; Description: HTTP status codes
;===========================================
*/

const header = require('../../pierce-header'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 4.3") + " \n ");

//required modules
var express = require("express");
var http = require("http");

var app = express();

//response messages for each code
app.get("/not-found", function(request,response){
  response.status(404);
  response.json({
    error:"Move along, nothing to see here..."
  });
});

app.get("/ok", function(request,response){
  response.status(200);
  response.json({
    message: "It's all good in the hood."
  });
});

app.get("/not-implemented", function(request,response){
  response.status(501);
  response.json({
    error: "Something has gone horribly, horribly wrong. Whoops, our bad. "
  });
});

//start server
http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080");
});
