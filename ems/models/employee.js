/*
============================================
; Title: Assignment 7.4
; Author: Kimberly Pierce
; Date: 1 April 2020
; Modified By: Kimberly Pierce
; Description: EMS Milestone 3
;===========================================
*/

const header = require('../../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 7.4") + " \n ");

//required modules
var mongoose = require ("mongoose");

//define employee schema
var employeeSchema =  mongoose.Schema ({
  firstName:{type: String, required:true},
  lastName: {type: String, required: true }
});

//map schema to employee model
var Employee = mongoose.model("Employee", employeeSchema);

//export module publicly
module.exports = Employee;
