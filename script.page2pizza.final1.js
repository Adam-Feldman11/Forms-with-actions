//function for when you click on the image.
function imageHover(){
alert("mmmm, looks good, doesn't it?");
}
//function for changing the curser to crosshair when over the image
function changeCursor(){
var theImage = document.getElementById("deepdishpizza");
theImage.style.cursor = 'crosshair'
}

function ValidateInput(){

}
//function for changing the restaurant name field to yellow without any text
function showName(){
    
var theName = document.getElementById("restaurantName");
theName.style.backgroundColor = "yellow";
}
//function for changing the location field to yellow without any text

function showLocation(){

    var theName = document.getElementById("location");
theName.style.backgroundColor = "yellow";
}
//function for changing the toppings field to yellow without any text

function showToppings(){

    var theName = document.getElementById("toppings");
theName.style.backgroundColor = "yellow";
}


document.getElementById("pizzaForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var restaurantName = document.getElementById("restaurantName").value;
    var location = document.getElementById("location").value;
    var toppings = document.getElementById("toppings").value;
    var pizzaImage = document.getElementById("pizzaImage").files[0]; 


    var formData = new FormData();
    formData.append("restaurantName", restaurantName);
    formData.append("location", location);
    formData.append("toppings", toppings);
    formData.append("pizzaImage", pizzaImage);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/submit-pizza", true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert("Pizza submitted successfully!");
      } else {
        alert("Error submitting pizza. Please try again.");
      }
    };
    xhr.send(formData);
  });

