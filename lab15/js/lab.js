// index.js - Use Ajax for Lab 15
// Author: Ceaar Hernandez
// Date: 06-01-2025

// Constants

// Functions

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
























// Button click response
$("#submit").click(function(){
  console.log("Yes or no");


// Using the core $.ajax().method
$.ajax({
  url:"https://yesno.wtf/api", 

  data: {   // The Data will be sent and convereted to a query string.
         id: 1, 
         api_key: "yes or no",
        },

 // Whether this a POST or GET request
 type: "GET", 

 // The type of data we expect back 
 dataType: "json", 

 // What we do when the api call is successful
 //   all the action goes in here
 sucess: function(data) {
  console.log("Is this true");
  console.log(data);

 },
 // What we do if the api call fails
 error: function(xhr, status, errorThrown) {
  console.log("Error:", status, errorThrown);
 }
})

})