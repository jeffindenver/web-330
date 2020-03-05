/*
===============================================================================
; Title:  shepherd-assignment3.2.js
; Author: Professor Krasso
; Date:   3/5/2020
; Modified By: Jeff Shepherd
; Description: The factory pattern
;==============================================================================
*/

"use strict";

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 3.2"));
console.log("");

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>

  Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

//constructors
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

function Informix(properties) {
  this.username = properties.username || "bossman";
  this.password = properties.password || "mon3y";
  this.server = properties.server || "localhost:4123";
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7
}

function Oracle(properties) {
  this.username = properties.username || "oracle-admin";
  this.password = properties.password || "oracle-s3cret";
  this.server = properties.server || "localhost:8080";
  this.version = properties.version || 1.2
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;

DatabaseFactory.prototype.createDatabase = function (properties) {
  switch (properties.databaseType) {
    case "Postgres":
      this.databaseClass = Postgres;
      break;
    case "MySql":
      this.databaseClass = MySql;
      break;
    case "Oracle":
      this.databaseClass = Oracle;
      break;
    case "Informix":
      this.databaseClass = Informix;
      break;
    default:
      this.databaseClass = MySql;
  }
  return new this.databaseClass(properties);
};

let postgresFactory = new DatabaseFactory();
let postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

let mySqlFactory = new DatabaseFactory();
let mySql = mySqlFactory.createDatabase({
  databaseType: 'MySql',
  username: "default",
  password: "password"
});

let informixFactory = new DatabaseFactory();
let informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "bossman",
  password: "mon3y"
});

let oracleFactory = new DatabaseFactory();
let oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "oracle-admin",
  password: "oracle-s3cret"
});

console.log(oracle);
console.log(informix);
