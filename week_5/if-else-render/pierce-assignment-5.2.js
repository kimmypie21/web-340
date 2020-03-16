/*
============================================
; Title: Assignment 5.2
; Author: Kimberly Pierce
; Date: 16 March 2020
; Modified By: Kimberly Pierce
; Description: EJS Templates
;===========================================
*/

const header = require('../../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 5.2") + " \n ");

var express = require ("express");
var http = require ("http");
var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var f = [
  "Molly",
  "Ben",
  "Swidgen",
  "Wee"
];

app.get("/", function(request, response){
  response.render("index",{
    dogs:f
  });
});

http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080");
});

