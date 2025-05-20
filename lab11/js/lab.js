// Lab 11- Javascript functions that helps with events.
// Author: Cesar Hernandez
// Date: 5-19-2025
// Be sure to have the latest Jquery



// Sort the characters in a string with aplhabetical order.
function sortString(inputString) {
  return inputString.split('').sort().join('');
}


// Button Listener
$("#submit").click(function(){
  const userName = $("#user-name").val(); // --> Recives the input's value field.
  userNameSorted = sortString(userName);  // --> Modifies and sorts the username.
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>'); // --> Selects the output div and appends the new modded div.

});