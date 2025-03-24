// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: Mar 2025
// This file contains the JS functions for index.html

/**
 * Gets user street number and street name, then displays it.
 */
function enterClicked() {
  // input
  const streetNumber = parseInt(document.getElementById("street-number").value)
  const streetName = document.getElementById("street-name").value

  // output
  document.getElementById("user-info").innerHTML =
    "Your address is: " + streetNumber + " " + streetName + "."
}