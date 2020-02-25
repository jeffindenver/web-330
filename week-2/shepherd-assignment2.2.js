/*
===============================================================================
; Title:  shepherd-assignment2.2.js
; Author: Professor Krasso
; Date:   2/25/2020
; Modified By: Jeff Shepherd
; Description: building prototypes
;==============================================================================
*/

"use strict";

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 2.2"));
console.log("");

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'
*/

let person = {
  getAge: function () {
    return this.age;
  }
};

let kirk = Object.create(person, {
  age: {
    value: 40
  },
  fullName: {
    value: "James T Kirk"
  }
});

console.log("The person's full name is " + kirk.fullName);
console.log("The person's age is " + kirk.getAge());
