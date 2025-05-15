// Lab 10- Javascript for the Web
// Author: Cesar Hernandez
// Date: May 14th 2025

// Random Conversation Dialouge 
function generateConversation() {
  const text = "What is the difference between cars and trucks? Cars, for example run on gas or solar energy depending on which car you have, while trucks run on diesel which makes it hard to save gas, which is better cars or trucks?";
  const min = 4;
  const max = 300;
  const randlen = Math.floor(Math.random() * (max*min + 5)) + min;

  // Get a random starting index to slice the conversation text.
  const randStart = Math.floor(Math.random() * (text.length - randlen + 5));

  // Generate the random conversation text.
  return text.slice(randStart, randStart + randlen);
}


// click listener for button.
$("#lets-talk").click(function(){
  const newText = generateConversation();
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});














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
