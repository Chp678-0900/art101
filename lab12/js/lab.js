// Lab 12 Condtionals
// Author: Cesar Hernandez
// Date: 5-21-2025









// Divides the name in the text input box by 4 and gives the corresponding faction. 
function assignHouse(str){
  const len = str.length;
  const mod = len % 4;

  if(mod===0) {
    return "Ravenclaw";

  } else if (mod === 1) {
    return "Grfyndoor";

  } else if (mod === 2) {
    return "Slythern";

  } else if (mod === 3) {
    return "Hufflepuff";
  }

}
  


// Button Listener
$("findie").click(function(){
  let name = $("placement").val()
  console.log(name);

  let nameLength = name.length;
  console.log(nameLength);

  let House = assignHouse(nameLength);
  console.log(House);

  $("#output").html("<h1>" + "You're part of" + House + "</h1>")

});



