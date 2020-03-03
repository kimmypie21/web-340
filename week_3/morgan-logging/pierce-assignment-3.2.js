/*
============================================
; Title: Assignment 3.2
; Author: Professor Krasso
; Date: 3 March 2020
; Modified By: Kimberly Pierce
; Description: Morgan Logging
;===========================================
*/

const header = require('../../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 3.2") + " \n ");
//required app modules
var express = require ("express");
var http = require ("http");
var path = require ("path");
var logger = require ("morgan");
var app = express ();
//use ejs, find in views, use morgan
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
//request response message
app.get("/", function(request, response){
  response.render("index", {
    message: "I love logging things! -Morgan"
  });
});
//start server
http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080")
});
