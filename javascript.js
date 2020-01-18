var query = "burger";
var health = "vegan";
var diet = "vegetarian";
var excludeIngredients = "eggs";
var intolerances = "gluten"
var cuisine = "italian";
var mealType = "snack";
var calories = "300+"
var time = "30+"

var qURLFirst = "https://api.spoonacular.com/recipes/search?query=" + query + "&excludeIngredients=" + excludeIngredients + "&intolerances=" + intolerances + "&diet=" + diet + "&number=10&apiKey=874efe7482a6472e93947420655c6cad";

//Need the image, title, link


$.ajax({
    url: qURLFirst,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var recipeIDArray = [];
    var foodImgArray = [];
    var foodTitleArray = [];
    var foodLinkArray = [];
    for (var i = 0; i < response.results.length; i++) {
        var recipeID = response.results[i].id;
        var foodTitle = response.results[i].title;
        var foodImg = "https://spoonacular.com/recipeImages" + response.results[i].image;

        recipeIDArray.push(recipeID);
        recipeIDArray.push(foodTitle);
        recipeIDArray.push(foodImg);
        qURLThird = "https://api.spoonacular.com/recipes/" + recipeID + "/information?includeNutrition=false&apiKey=874efe7482a6472e93947420655c6cad";
        $.ajax({
            url: qURLSecond,
            method: "GET"
        }).then(function(response2) {
            console.log(response2);
    
        })
    }
  });
