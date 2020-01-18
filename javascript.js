$(document).ready(function () {


  drink = $("#").val();
  var qURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drink
  // var qURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"


  $.ajax({
    url: qURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    console.log(qURL);

    if (drink === "Beef") {
      var allRum = response.drinks
      var drinkID = respose.drinks.idDrink
      var drinkIMG = response.drinks.strDrinkThumb
      $.ajax({
        url: https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=rum,
        method: "GET"
      })(function (response) {
        console.log(response.drinks);
        for (let index = 0; index < drinks.length; index++) {
          console.log(response);

        }



      });


    });