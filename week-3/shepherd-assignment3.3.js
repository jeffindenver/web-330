/*
===============================================================================
; Title:  shepherd-assignment3.3.js
; Author: Andy Osmani
; Modified By: Professor Krasso, Jeff Shepherd
; Date:   3/5/2020
; Description: Demonstrates the use of the Singleton Pattern
; in a JavaScript program.
;==============================================================================
*/

"use strict";

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 3.3"));
console.log("");

var mySingleton = (function() {
  var instance;

  function init() {
    function privateMethod() {
      console.log("I am private");
    }

    var privateVariable = "I am also private";

    var privateRandomNumber = Math.random();

    return {
      publicMethod: function() {
        console.log("The public can see me!");
      },

      publicProperty: "I am also public",

      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  };
})();

function databaseSingletonTest() {
  let database1 = mySingleton.getInstance();
  let database2 = mySingleton.getInstance();
  return database1 === database2;
}

console.log("Are the instances the same? " + databaseSingletonTest().toString());
