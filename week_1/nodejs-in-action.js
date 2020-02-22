
/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 22 February 2020
; Modified By: Kimberly Pierce
; Description: Node.js in action
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 1.5") + " \n ");


//Variable declaration

var http = require("http");

function processRequest(req, res) {

var body = "I Hope This Works";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);
