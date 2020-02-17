/*
===============================================================================
; Title:  shepherd-assignment1.3.js
; Author: Jeff Shepherd
; Date:   2/17/2020
; Modified By:
; Description: Refresher on defining classes
;==============================================================================
*/

"use strict";

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 1.3"));
console.log("");

/**
 * Params: array of 4 elements
 * Response: CellPhone object
 * Description: CellPhone constructor
 */
function CellPhone(args) {
  this.manufacturer = args[0];
  this.model = args[1];
  this.color = args[2];
  this.price = args[3];
}

CellPhone.prototype.getPrice = function () {
  return this.price;
}

CellPhone.prototype.getModel = function () {
  return this.model;
}

CellPhone.prototype.getDetails = function () {
  return `-- DISPLAYING CELL PHONE DETAILS --
  Manufacturer: ${this.manufacturer}
  Model: ${this.getModel()}
  Color: ${this.color}
  Price: \$${this.getPrice()}`;
}

const data = ["Apple", "iPhone Super", "black", "2000.00"];

const aPhone = new CellPhone(data);

console.log(aPhone.getDetails());
