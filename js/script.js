// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Mar 2025
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function enterClicked() {
  // input
  const firstName = document.getElementById("first-name").value
  const userAge = parseInt(document.getElementById("age-entered").value)
  // output
  document.getElementById("user-info").innerHTML =
    "Your info is: " + firstName + ", " + userAge + "."
}
