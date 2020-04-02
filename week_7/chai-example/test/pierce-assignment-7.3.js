/*
============================================
; Title: Assignment 7.3
; Author: Kimberly Pierce
; Date: 2 April 2020
; Modified By: Kimberly Pierce
; Description: Mocha and Chai
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 7.3") + " \n ");

var fruits= require("../fruits");
var chai = require("chai");
var assert = chai.assert;

describe("fruits", function(){
  it("should return an array of fruits", function(){
    var f = fruits("Apple, Orange, Mango");
    assert(Array.isArray(f));
  });
});
