// // Jack's JS - JS that manages the food calls
$(document).ready(function () {
  

  $("#sbutton").click(function () {
    
    event.preventDefault()


    var query = $("#qmeals").val();
    var diet = $("#ctypes").val();
    var cuisine = $("#mtimes").val();
    var intolerances = $("#ptimes").val();

    var qURLFirst = "https://api.spoonacular.com/recipes/search?query=" + query + "&cuisine=" + cuisine + "&intolerances=" + intolerances + "&diet=" + diet + "&number=5&apiKey=0ac87b2fca8c471788b77cb6488efc7f";
    $.ajax({
      url: qURLFirst,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      console.log(query);
      var recipeIDArray = [];
      var foodImgArray = [];
      var foodTitleArray = [];
      var foodLinkArray = [];
      for (var i = 0; i < 3; i++) {
        var recipeID = response.results[i].id;
        var foodTitle = response.results[i].title;
        // var foodImg = "https://spoonacular.com/recipeImages" + response.results[i].image;
        recipeIDArray.push(recipeID);
        foodTitleArray.push(foodTitle);
        qURLSecond = "https://api.spoonacular.com/recipes/" + recipeID + "/information?includeNutrition=false&apiKey=0ac87b2fca8c471788b77cb6488efc7f";
        $.ajax({
          url: qURLSecond,
          method: "GET"
        }).then(function (response2) {
          console.log(response2);
          var foodLink = response2.sourceUrl;
          foodLinkArray.push(foodLink);
          console.log(foodLink);
          var foodImg = response2.image;
          foodImgArray.push(foodImg);
          for (index = 0; index < foodLinkArray.length; index++) {
            $("#fimage" + index).attr("src", foodImgArray[index]);

            $("#fname" + index).text(foodTitleArray[index]);

            $("#food-link" + index).attr("href", foodLinkArray[index]);

            if (recipeID === undefined) {
              alert("No results found.");
            }
            
          }
        })
      }
      console.log(foodLinkArray);
      console.log(recipeIDArray);
      console.log(foodImgArray);
      console.log(foodTitleArray)
    });
 

  // // MEvans JS - JS that manages the drink calls
    var drink = 0
    // var meats = "Beef"
    var meats = $("#qmeals").val()
    // var userSelection = document.getElementById("qmeal1");
    // var meats = userSelection.options[userSelection.selectedIndex].value;
    console.log(meats);
    // These calls set the drink results based on the meat choice
    function setDrink() {
      if (meats === "beef") {
        drink = "rum";
        console.log(meats);
      }
      else if (meats === "pork") {
        drink = "gin";
        console.log(meats);
      }
      else if (meats === "veggie") {
        drink = "wine";
        console.log(meats);
      }
      else if (meats === "chicken") {
        drink = "brandy";
        console.log(meats);
      }
      else if (meats === "shellfish") {
        drink = "tequila";
        console.log(meats);
      }
      else if (meats === "fish") {
        drink = "vodka";
        console.log(meats);
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
                  response.drinks[0].strIngredient7);



                // This pulls the title
                var drinkName1 = response.drinks[0].strDrink
                $("#dname1").text(drinkName1);
                // This appends the text for the ingredients
                $("#drink-ing1").text(drinkDisplay1);
                console.log(drinkDisplay1);
                // This pulls the drink instructions for the first drink
                var drinkIn1 = response.drinks[0].strInstructions
                $("#drink-ins1").text(drinkIn1);
                console.log(drinkIn1);
                // This pulls the drink thumbnail for the first drink
                var drinkThum1 = response.drinks[0].strDrinkThumb
                $("#dimage1").attr("src", drinkThum1);
                console.log(drinkThum1);
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
                      response.drinks[0].strIngredient7);
                    // This pulls the title
                    var drinkName2 = response.drinks[0].strDrink
                    $("#dname2").text(drinkName2);
                    // This appends the text for the ingredients
                    $("#drink-ing2").text(drinkDisplay2);
                    console.log(drinkDisplay2);
                    // This call pulls the drink instructions for the second drink
                    var drinkIn2 = response.drinks[0].strInstructions
                    $("#drink-ins2").text(drinkIn2);
                    console.log(drinkIn2);
                    // This call pulls the drink thumbnail for the second drink
                    var drinkThum2 = response.drinks[0].strDrinkThumb
                    $("#dimage2").attr("src", drinkThum2);
                    console.log(drinkThum2);
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
                          response.drinks[0].strIngredient7);
                        // This pulls the title
                        var drinkName3 = response.drinks[0].strDrink
                        $("#dname3").text(drinkName3);
                        // This appends the text for the ingredients
                        $("#drink-ing3").text(drinkDisplay3);
                        console.log(drinkDisplay3);
                        // This call pulls the drink instructions for the third drink
                        var drinkIn3 = response.drinks[0].strInstructions
                        $("#drink-ins3").text(drinkIn3);
                        console.log(drinkIn3);
                        // This call pulls the drink thumbnail for the second drink
                        var drinkThum3 = response.drinks[0].strDrinkThumb
                        $("#dimage3").attr("src", drinkThum3);
                        console.log(drinkThum3);
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

  })
  });

