// index.js - Lab 16 Json and API
// Author: Cesar Hernandez
// Date: 06-04-2025


// Using the core $.ajax() method
$.ajax({
  // The URL for the request (from the api docs)
  url: "https://xkcd.com/614/info.0.json",
  // The data to send (will be converted to a query string)
  data: { 
          // here is where any data required by the api 
          //   goes (check the api docs)
          id: 614,
          api_key: "woodpecker",
          type: "GET",
          dataType : "json",
        },
  // What do we do when the api call is successful
  //   all the action goes in here
  success: function(data) {
      console.log(data);

    // Pulling out the Data:
    let title = data.title;
    let date = data.num;
    let desc = data.transcript;
    let imageUrl = data.img;

  // Data in output:
    $("#output").html(`<h2>${title}<h2>`);
    $("#output").append(`<img src = '${imageUrl}'/>`);
    $("#output").append(`<p class = 'date'>Comic: ${date}</p>`);
    $("#output").append(`<p class = 'desc'> ${desc}</p>`);
  },
  
  // What we do if the api call fails
  error: function (jqXHR, textStatus, errorThrown) { 
      console.log("Error:", textStatus, errorThrown);
  }
})