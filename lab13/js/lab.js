// Lab 13- Loops
// Author: Cesar Hernandez
// Date:5-26-2025

// FizzBuzzBoom(but Trail Mix)
function bagTrailMix() {
  let output = "";

for(let mix = 1; mix <= 200; mix++){
  let result = ""; 

  if(mix % 3 === 0 && mix % 5 === 0) {
    result = "Grains";
  }

  else if(mix % 5 ===0){
    result = "Raisins";
  }

  else if(mix % 7 === 0){
    result = "Granola";
  }

  else if(mix % 3 ===0){
    result = "M&M";
  }

  else{
    result = mix;
  }

  output += mix + ": " + result + "<br>";
 }
 return output;
}

// Outputting into the webpage
$("#output").html(bagTrailMix());
