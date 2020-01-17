drink = "Vodka"
var qURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drink


$.ajax({
    url: qURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });