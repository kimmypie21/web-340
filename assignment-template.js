/*
============================================
; Title: Assignment 1.3
; Author: Kimberly Pierce
; Date: 19 February 2020
; Modified By: Kimberly Pierce
; Description: Modules
;===========================================
*/

function Dog (breed, color, size, gender){
    this.breed = breed,
    this.color = color,
    this.size = size,
    this.gender = gender,
    this.details = function(){
        return this.breed + this.color + this.size + this.gender
    };
};

var Swidgen = ('Boxer Mix', 'Fawn & White', 'Large', 'Female');

console.log(Swidgen);
