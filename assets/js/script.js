console.log("Reading Script");

//Listens for a click on the search button and when click, it'll run the function
$("#ButtonID").click(function () {
  //Local Variables
  var drinkID;

  //Gets value from the wanting drink
  //   var drink = $("#ID").val();
  var drink = "Non_Alcoholic";

  //creates API variable
  var dAPI =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" + drink;
  var drAPI = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

  //Fetches a random drinks from cocktaildb
  fetch(dAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //Gets length of the drink available and saves the number
      var amountDrink = data.drinks.length - 1;
      var luckyNum;
      console.log(amountDrink);
      //Gets a random number
      luckyNum = Math.floor(Math.random() * amountDrink + 0);
      //Gets Id from that random drink pick
      drinkID = data.drinks[luckyNum].idDrink;

      drAPI = drAPI + drinkID;
      console.log(drAPI);

      fetch(drAPI)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        });
    });
});
