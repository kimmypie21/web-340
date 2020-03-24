/*
============================================
; Title: Assignment 6.3
; Author: Kimberly Pierce
; Date: 23 March 2020
; Modified By: Kimberly Pierce
; Description: Database Persistence
;===========================================
*/

const header = require('../../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 6.3") + " \n ");

//required modules
var express = require("express");
var http = require ("http");
var mongoose = require ("mongoose");
var logger = require ("morgan");

//database connection
var mongoDB = "mongodb+srv://new_user:54n2T7UShxq@buwebdev-cluster-1-brhxo.mongodb.net/ems";
mongoose.connect(mongoDB, {
  useNewUrlParser: true, useUnifiedTopology: true
});

//success and error messages
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on ("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function(){
  console.log("Application connected to mLab MongoDB instance");
});

//application
var app = express();
app.use(logger("short"));

//create server

http.createServer(app).listen(8080, function(){
  console.log("Application connected to port 8080");
});
