/*
===============================================================================
; Title:  shepherd-assignment1.4.js
; Author: Jeff Shepherd
; Date:   2/17/2020
; Modified By:
; Description: Duck Typing exercise
;==============================================================================
*/

"use strict";

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 1.4"));
console.log("");

/**
 * Params: one string
 * Response: Car object
 * Description: Car constructor
 */
function Car(model) {
  this.model = model;
}

Car.prototype.start = function () {
  console.log(this.constructor.name + " added to the racetrack!");
}

/**
 * Params: two strings
 * Response: Truck object
 * Description: Truck constructor
 */
function Truck(model, year) {
  this.model = model;
  this.year = year;
}

Truck.prototype.start = function () {
  console.log(this.constructor.name + " added to the racetrack!");
}

/**
 * Params: three strings
 * Response: Jeep object
 * Description: Jeep constructor
 */
function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}

Jeep.prototype.start = function () {
  console.log(this.constructor.name + " added to the racetrack!");
}

let racetrack = [];

/**
 * Params: one object with a start function
 * Response: 'starts' the vehicle and adds it to racetrack[]
 * Description: calls the start method of passed objects
 * and then adds the object to an array.
 */
function driveIt(vehicle) {
  vehicle.start();
  racetrack.push(vehicle);
}

const aCar = new Car("500 Abarth");
const aTruck = new Truck("F-150", "2019");
const aJeep = new Jeep("Wrangler", "2018", "black");

driveIt(aCar);
driveIt(aTruck);
driveIt(aJeep);

console.log("");
console.log("-- The following vehicles have been added to the racetrack --");
racetrack.forEach(item => {
  console.log(item.constructor.name + ": " + item.model);
});
