// MEvans JS - JS that manages the drink calls
$(document).ready(function () {

  var drink = 0

  var Meats = "Beef"

  // var Meats = $("#").val()
  function setDrink() {
    if (Meats === "Beef") {
      drink = "rum";
      console.log(Meats);
    }
  }
  setDrink();




  var qURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drink;
  // var qURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

  // Call that randomizes the drink results based on the above Meat entry by the user.
  $.ajax({
    url: qURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    console.log(qURL);

    var drinkList = response.drinks
    console.log(response.drinks);

    var drinkID1 = response.drinks[Math.ceil(Math.random() * drinkList.length)];
    var drinkID2 = response.drinks[Math.ceil(Math.random() * drinkList.length)];
    var drinkID3 = response.drinks[Math.ceil(Math.random() * drinkList.length)];

    console.log(drinkID1);
    console.log(drinkID2);
    console.log(drinkID3);

    // Call that pulls the ID from the above randomized drinks - needed in order to pull the ingredients & recipe list from the drink API

    $.ajax({
      url: qURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      console.log(qURL);

      drinkResult1 = drinkID1.idDrink;
      drinkResult2 = drinkID2.idDrink;
      drinkResult3 = drinkID3.idDrink;

      console.log(drinkResult1);
      console.log(drinkResult2);
      console.log(drinkResult3);

      // This call pulls the ingredient list for the first randomized drink response from above
      var qURLdrinkResult1 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkResult1;

      $.ajax({
        url: qURLdrinkResult1,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        console.log(qURLdrinkResult1);

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
       
        // This callp pulls the ingredients for the second response from above
        var qURLdrinkResult2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkResult2;


        $.ajax({
          url: qURLdrinkResult2,
          method: "GET"
        }).then(function (response) {
          console.log(response);
          console.log(qURLdrinkResult1);
  
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

      });

    });

    })

});
