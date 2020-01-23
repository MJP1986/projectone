// // Jack's JS - JS that manages the food calls
// // @@ -1,3 +1,51 @@
// // var query = "burger";
// // var health = "vegan";
// // var diet = "vegetarian";
// // var excludeIngredients = "eggs";
// // var intolerances = "gluten"
// // var cuisine = "italian";
// // var mealType = "snack";
// // var calories = "300+"
// // var time = "30+"

// // var qURLFirst = "https://api.spoonacular.com/recipes/search?query=" + query + "&excludeIngredients=" + excludeIngredients + "&intolerances=" + intolerances + "&diet=" + diet + "&number=5&apiKey=874efe7482a6472e93947420655c6cad";

// // //Need the image, title, link


// // $.ajax({
// //     url: qURLFirst,
// //     method: "GET"
// //   }).then(function(response) {
// //     console.log(response);
// //     var recipeIDArray = [];
// //     var foodImgArray = [];
// //     var foodTitleArray = [];
// //     var foodLinkArray = [];
// //     for (var i = 0; i < response.results.length; i++) {
// //         var recipeID = response.results[i].id;
// //         var foodTitle = response.results[i].title;
// //         var foodImg = "https://spoonacular.com/recipeImages" + response.results[i].image;

// //         recipeIDArray.push(recipeID);
// //         foodTitleArray.push(foodTitle);
// //         foodImgArray.push(foodImg);
// //         qURLSecond = "https://api.spoonacular.com/recipes/" + recipeID + "/information?includeNutrition=false&apiKey=874efe7482a6472e93947420655c6cad";
// //         $.ajax({
// //             url: qURLSecond,
// //             method: "GET"
// //         }).then(function(response2) {
// //             console.log(response2);
// //             var foodLink = response2.sourceUrl;
// //             foodLinkArray.push(foodLink);
// //             console.log(foodLink);
// //         })
// //     }

// //     console.log(recipeIDArray);
// //     console.log(foodImgArray);
// //     console.log(foodTitleArray)
// //   });


// // MEvans JS - JS that manages the drink calls
$(document).ready(function () {

  var drink = 0

  var Meats = "Beef"
  // var Meats = $("#").val()

  // These calls set the drink results based on the meat choice
  function setDrink() {
    if (Meats === "Beef") {
      drink = "rum";
      console.log(Meats);
    }
    else if (Meats === "Pork") {
      drink = "gin";
      console.log(Meats);
    }
    else if (Meats === "Veggie") {
      drink = "wine";
      console.log(Meats);
    }
    else if (Meats === "Chicken") {
      drink = "brandy";
      console.log(Meats);
    }
    else if (Meats === "Shellfish") {
      drink = "tequila";
      console.log(Meats);
    }
    else if (Meats === "fish") {
      drink = "vodka";
      console.log(Meats);
    }

  }
  setDrink();



  var qURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drink;
  // var qURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

  // Call that randomizes the drink results based on the above Meat entry by the user.

  $.ajax({
    type: "post",
    url: qURL,
    method: "GET",
    success: function (response) {

      var drinkList = response.drinks

      var drinkID1 = response.drinks[Math.ceil(Math.random() * drinkList.length)];
      var drinkID2 = response.drinks[Math.ceil(Math.random() * drinkList.length)];
      var drinkID3 = response.drinks[Math.ceil(Math.random() * drinkList.length)];

      console.log(drinkID1);
      console.log(drinkID2);
      console.log(drinkID3);

      // Call that pulls the ID from the above randomized drinks - needed in order to pull the ingredients & recipe list from the drink API

      $.ajax({
        type: "post",
        url: qURL,
        method: "GET",
        success: function (response) {

          drinkResult1 = drinkID1.idDrink;
          drinkResult2 = drinkID2.idDrink;
          drinkResult3 = drinkID3.idDrink;

          console.log(drinkResult1);
          console.log(drinkResult2);
          console.log(drinkResult3);

          // This call pulls the ingredient list from the first randomized drink result above

          var qURLdrinkResult1 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkResult1;

          $.ajax({
            type: "post",
            url: qURLdrinkResult1,
            method: "GET",
            success: function (response) {

              var drinkDisplay1 = (response.drinks[0].strIngredient1 + ", " +
                response.drinks[0].strIngredient2 + ", " +
                response.drinks[0].strIngredient3 + ", " +
                response.drinks[0].strIngredient4 + ", " +
                response.drinks[0].strIngredient5 + ", " +
                response.drinks[0].strIngredient6 + ", " +
                response.drinks[0].strIngredient7 + ", " +
                response.drinks[0].strIngredient8 + ", " +
                response.drinks[0].strIngredient9 + ", " +
                response.drinks[0].strIngredient10);

              console.log(drinkDisplay1);

              // This call pulls the drink instructions for the first drink
              var drinkIn1 = response.drinks[0].strInstructions
              console.log(drinkIn1);

              // This call pulls the ingredient list from the second randomized drink result above

              var qURLdrinkResult2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkResult2;

              $.ajax({
                type: "post",
                url: qURLdrinkResult2,
                method: "GET",
                success: function (response) {

                  var drinkDisplay2 = (response.drinks[0].strIngredient1 + ", " +
                    response.drinks[0].strIngredient2 + ", " +
                    response.drinks[0].strIngredient3 + ", " +
                    response.drinks[0].strIngredient4 + ", " +
                    response.drinks[0].strIngredient5 + ", " +
                    response.drinks[0].strIngredient6 + ", " +
                    response.drinks[0].strIngredient7 + ", " +
                    response.drinks[0].strIngredient8 + ", " +
                    response.drinks[0].strIngredient9 + ", " +
                    response.drinks[0].strIngredient10);

                  console.log(drinkDisplay2);

                  // This call pulls the drink instructions for the second drink
                  var drinkIn2 = response.drinks[0].strInstructions
                  console.log(drinkIn2);


                  // This call pulls the ingredient list from the third randomized drink result above

                  var qURLdrinkResult3 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkResult3;

                  $.ajax({
                    type: "post",
                    url: qURLdrinkResult3,
                    method: "GET",
                    success: function (response) {

                      var drinkDisplay3 = (response.drinks[0].strIngredient1 + ", " +
                        response.drinks[0].strIngredient2 + ", " +
                        response.drinks[0].strIngredient3 + ", " +
                        response.drinks[0].strIngredient4 + ", " +
                        response.drinks[0].strIngredient5 + ", " +
                        response.drinks[0].strIngredient6 + ", " +
                        response.drinks[0].strIngredient7 + ", " +
                        response.drinks[0].strIngredient8 + ", " +
                        response.drinks[0].strIngredient9 + ", " +
                        response.drinks[0].strIngredient10);

                      console.log(drinkDisplay3);

                      // This call pulls the drink instructions for the third drink
                      var drinkIn3 = response.drinks[0].strInstructions
                      console.log(drinkIn3);



                    }

                  })
                }

              })

            }

          })

        }



      });

    }



  });

});
