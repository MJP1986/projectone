$(document).ready(function () {


  drink = "Vodka"
  // var qURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drink
  var qURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

  $.ajax({
    url: qURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    console.log(qURL);
  });

});