// Lab 6 Arrays and Objects
// Author: Cesar Hernandez
// Date: April 27 2025

// Define Variables
myTransport = ["Ford Taurus","bike","walking","skateboarding","rides from friends"];

// create an object for my main ride
myMainRide = {
  make:"Ford",
  model:"Taurus",
  color:"Rusty",
  year: 1995, 
// we can look at the functions within our objects (method)
// that also uses a value of the year when looking at (using this.year)
  age : function(){
    return 2024 - this.year; 
  }
}

// Output
document.writeln("Kinds of Transportation I use: ", myTransport, "</br>");
// lets my write an object to the document
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide,null,'\t'),"<pre>"); 
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
