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
var Employee = require ("./models/employee");
//csrf protections
var csrfProtection = csrf({cookie:true});
//start express
var app = express();
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

//SETS
//use ejs views
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//USES
//use morgan
app.use(logger("short"));
//use public directories for styles and images
app.use(express.static (path.join(__dirname, "public")));
//use helmet
app.use(helmet.xssFilter());
//use csrf, cookie and body parser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(csrf({cookie:true}));
app.use(csrfProtection);
app.use(function(req, res,next){
  var token=req.csrfToken();
  res.cookie("XSRF-TOKEN", token);
  res.locals.csrfToken=token;
  next();
});


//GETS
//get index page
app.get("/", function(req, res){
  Employee.find({}, function (err, employees){
    if (err){
      console.log(err);
      throw err;
    }else{
      console.log(employees);
      res.render("index", {
        title: "EMS | Home",
        employees: employees
      })
    }
  });
});

app.get("/list", function(req, res){
  Employee.find({}, function (err, employees){
    if (err){
      console.log(err);
      throw err;
    }else{
      console.log(employees);
      res.render("list", {
        title: "EMS | Home",
        employees: employees
      })
    }
  });
});

//get new page
app.get("/new", function(request,response){
  response.render("new", {
    message: "XSS Prevention Example"
  });
});

//get employee list page
app.get("/list", function(request, response){
  response.render("list",{
    message: "Employee List"
  });
});

//POSTS
app.post("/process", function(req,res){
  //console.log(request.body.txtName);
  if (!req.body.txtName){
    res.status(400).send("Entries must have a  name");
    return;
  }
  var employeeName = req.body.txtName;
    console.log(employeeName);
  var employee = new Employee ({
    name: employeeName
  });
  employee.save(function(error){
    if(error){
      console.log(error);
      throw error;
    }else{
    console.log(employeeName + "Saved Successfully!");
    res.redirect("/list");
    }
  });
});







//start server
http.createServer(app).listen(8080, function(){
  console.log("Application is started on port 8080");
});
