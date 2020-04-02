/*
============================================
; Title: Assignment 7.2
; Author: Kimberly Pierce
; Date: 2 April 2020
; Modified By: Kimberly Pierce
; Description: TDD in Action
;===========================================
*/

const header = require('../../../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 7.2") + " \n ");

var assert = require("assert");

describe("String#split", function(){
  it("should return an array of fruits", function (){
    assert(Array.isArray("Apple, Orange, Mango".split(",")));
  });
});

function getFruits(str){
  return str.split(",");
};


module.exports= getFruits;
