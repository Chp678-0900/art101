// Lab 9- Jqueries and Libaries (Not the libary book kind)
// Author: Cesar Hernandez
// Date: 5-12-2025

// Challenge Section Button
$("#challenge").apend("<'button id= button-challenge'>change the style of the challenge section</button>");
$("#button-challenge").click(function(){
  $("#challenge").toggleClass("special");
});

// Problem Section Button
$("#problems").apend("<'button id= button-problems'>change the style of the problem section</button>");
$("#button-problems").click(function(){
  $("#problems").toggleClass("special");
});

// Results Section Button
$("#results").apend("<'button id= button-results'>change the style of the results section</button>");
$("#results-problem").click(function(){
  $("#results").toggleClass("special");
})

// Function

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
