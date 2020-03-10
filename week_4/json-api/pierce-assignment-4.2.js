/*
============================================
; Title: Assignment 4.2
; Author: Kimberly Pierce
; Date: 10 March 2020
; Modified By: Kimberly Pierce
; Description: JSON APIs
;===========================================
*/

const header = require('../../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 4.2") + " \n ");
//required modules
var express = require("express");
var http = require ("http");
//start app
var app = express();
//request info, response with json data
app.get("/customer/:id", function(request,response){
  var id = parseInt(request.params.id, 10);
  response.json({
    firstName: "Swidgen",
    lastName: "Pierce",
    employeeId: id
  });
});
//start server
http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080");
});
