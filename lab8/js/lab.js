// Lab 8 - Anon Functions
// Author: Cesar Hernandez
// Date: May 7th 2025

// Array
 array = [4,18,250,500,1000]

// Functions
quickMath(6)

// Function Math 1
function quickMath(numb) {
  return numb * 4 + 1
}

//Anonymous Function
array.map(function(x){
  return x + 6 * 8;
})
  
// Array Map 1
var Key = array.map(quickMath);


// Console Log Outputs
console.log("My Selected Numbers: ", array);
console.log("6 will be multiplied by 4 then add 1. ", quickMath(6));
console.log("I want to PEMDAS on the selected numbers: ", Key);
console.log("Be anonymous with the array", anon);
