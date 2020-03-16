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

//required modules
var express = require ("express");
var http = require ("http");
var path = require("path");

app = express();
//find views
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//create array
var f = [
  "Molly",
  "Ben",
  "Swidgen",
  "Wee"
];
//display index page with array
app.get("/", function(request, response){
  response.render("index",{
    dogs:f
  });
});
//create server
http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080");
});

