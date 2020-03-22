/*
============================================
; Title: Assignment 5.4
; Author: Kimberly Pierce
; Date: 18 March 2020
; Modified By: Kimberly Pierce
; Description: EMS Milestone 1
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 5.4") + " \n ");

var express = require("express");
var http = require ("http");
var path = require ("path");
var logger = require ("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("styles", path.resolve(__dirname, "styles"));
app.set("view engine", "ejs");
app.use(logger("short"));

app.get("/", function(request, response){
  response.render("index", {
    title: "Home Page"
  });
});

app.get("/list", function(request, response){
  response.render("list", {
    title: "Employee List"
  });
});



http.createServer(app).listen(8080, function(){
  console.log("Application is started on port 8080");
});
