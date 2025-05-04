// Lab 7- Working with Functions
// Author: Cesar Hernandez
// Date: May 4 2025


// User Name Functions
function mySort() {
let userName = window.prompt("Put your name in for lab");
var nameArray = userName.split('');
var nameArraySort = nameArray.sort();
var nameArraySorted = nameArraySort.join(); 

console.log("userName = ", userName);
console.log("nameArray = ", nameArray);
console.log("nameArraySort = ", nameArraySort);
console.log("nameArraySorted= ", nameArraySorted);
return nameArraySorted;
}


// Output
document.writeln("Is this the name you want for yourself?", mySort(), "/br");
