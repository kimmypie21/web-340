/*
============================================
; Title: Assignment 1.3
; Author: Professor Krasso
; Date: 20 February 2020
; Modified By: Kimberly Pierce
; Description: Modules
;===========================================
*/
const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 1.3") + " \n ");

var url = require("url");
var parsedURL = url.parse("https://www.example.com/profile?name=smith");
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
