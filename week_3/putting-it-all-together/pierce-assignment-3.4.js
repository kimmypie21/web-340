/*
============================================
; Title: Assignment 3.4
; Author: Kimberly Pierce
; Date: 4 March 2020
; Modified By: Kimberly Pierce
; Description: Putting It All Together
;===========================================
*/

const header = require('../../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 3.4 ") + " \n ");

//required app modules
var express = require("express");
var http = require("http");
var path = require ("path");
var logger = require("morgan");
var app = express();


//tell express to use ejs views and where to find them
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
//tell express to use morgan for logging
app.use(logger("short"));
//request handler functions
app.get("/", function(request, response){
  response.render("index", {
    message: "home page"
  });
});
app.get("/about", function(request, response){
  response.render("about",{
    message: "about page"
  });
});
app.get("/contact", function(request, response){
  response.render("contact",{
    message: "contact page"
  });
});
app.get("/products", function(request, response){
  response.render("products",{
    message: "products page"
  });
});

//start server
http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080.");
});
