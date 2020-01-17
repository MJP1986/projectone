var query = "chicken";
var health = "gluten-free";
var time = "60+";
var cuisine = "indian";
var mealType = "snack";


var qURL = "https://api.edamam.com/search?q=" + query + "&health=" + health + "&cuisineType=" + cuisine + "&mealType=" + mealType + "&time=" + time + "&app_id=413e27d6&app_key=8db158675e2527545a955c92d442d938";


$.ajax({
    url: qURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });