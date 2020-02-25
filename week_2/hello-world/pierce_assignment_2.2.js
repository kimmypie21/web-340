/*
============================================
; Title: Assignment 2.2
; Author: Professor Krasso
; Date: 24 February 2020
; Modified By: Kimberly Pierce
; Description: Hello World With Express
;===========================================
*/

const header = require('../../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 2.2") + " \n ");


var express = require("express");//requires the express module
var http = require("http");
var app = express();//calls the express function to start a new express app

//middleware
app.use(function(request,response){
  console.log("In comes a request to:" + request.url);
  response.end("Hello World!");
});

http.createServer(app).listen(8080);//starts the server
