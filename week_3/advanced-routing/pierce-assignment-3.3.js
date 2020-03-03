/*
============================================
; Title: Assignment 3.3
; Author: Kimberly Pierce
; Date: 3 March 2020
; Modified By: Kimberly Pierce
; Description: Advanced Routing
;===========================================
*/

const header = require('../../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 3.3") + " \n ");

//required modules
var express = require("express");
var http = require ("http");
var logger = require ("morgan");
var path = require ("path");
var app = express();

//use ejs, find in views file, use morgan
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
//request response function
app.get("/:productId", function(request,response){
  var productId = parseInt(request.params.productId, 10);
  response.render("index", {
    productId: productId
  });
});
//create server
http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080");
});
