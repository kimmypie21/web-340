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


//required modules
var express = require("express");
var http = require ("http");
var path = require ("path");
var logger = require ("morgan");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require ("csurf");
var mongoose = require ("mongoose");
var helmet = require ("helmet");



//connect to mongoDB
var mongoDB = "mongodb+srv://new_user:54n2T7UShxq@buwebdev-cluster-1-brhxo.mongodb.net/ems";
mongoose.connect(mongoDB, {
  useNewUrlParser: true, useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on ("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function (){
  console.log("Application connected to mLab MongoDB instance");
});

//csrf protections
var csrfProtection = csrf({cookie:true});

//start express
var app = express();

//use ejs views
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//use morgan
app.use(logger("short"));

//use public directories for styles and images
app.use(express.static (path.join(__dirname, "public")));

//use helmet
app.use(helmet.xssFilter());

//use csrf, cookie and body parser
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response,next){
  var token=request.csrfToken();
  response.cookie("XSRF-TOKEN", token);
  response.locals.csrfToken=token;
  next();
});
app.use(bodyParser.urlencoded({
  extended: true
}));

//get index page
app.get("/", function(request, response){
  response.render("index", {
    message: "Home Page"
  });
});

//get employee list page
app.get("/list", function(request, response){
  response.render("list");
});
//get new page
app.get("/new", function(request,response){
  response.render("new", {
    message: "XSS Prevention Example"
  });
});

//
app.post("/process", function(request,response){
  console.log(request.body.txtName);
  response.redirect("/");
});







//start server
http.createServer(app).listen(8080, function(){
  console.log("Application is started on port 8080");
});
