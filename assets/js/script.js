console.log("Reading Script");

//Listens for a click on the search button and when click, it'll run the function
$("#ButtonID").click(function () {
  //Local Variables
  var dAPI;

  //Gets value from the wanting drink
  //   var drink = $("#ID").val();
  var drink = "Non_Alcoholic";
  // var drink = "vodka";

  //Checks to see if the drink div section is empty
  if (!$("#drink").is(":empty")) {
    //If not true, it'll empty the div before fetching another drink
    $("#drink").empty();
  }
  //Checks if the drink is non-alcoholic
  if (drink === "Non_Alcoholic") {
    //If non-alcoholic it'll get the correct API and display it
    console.log("The drink is non-alcoholic");
    dAPI = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" + drink;
    //calls fetch drink to fetch it
    fetchDrink(dAPI);
  } else if (drink === "Vodka") {
    console.log("Drink is Vodka");
    dAPI = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drink;
    //calls fetch drink to fetch it
    fetchDrink(dAPI);
  }
  //Black Border for Drink option *Austin
  $("#drink").addClass("openedMenu");
  //Calls to fetch drink and display it
});

//Fetches a drink API
function fetchDrink(dAPI) {
  //creates API variable
  var drAPI = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

  //Fetches a random drinks from cocktaildb
  fetch(dAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
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
          //Displays drink picture
          $("#drink").append(
            "<img src=" +
              data.drinks[0].strDrinkThumb +
              " alt=DrinkPic class=drinkImg /> <h2>" +
              data.drinks[0].strDrink +
              "</h2> <h3>Ingredients Needed</h3> <dl id=ingredientsList> </dl> <h3>Instructions</h3> <p>" +
              data.drinks[0].strInstructions +
              "</p>"
          );

          //Loops through the ingredients and measurements and appends them in the list
          for (var i = 1; i < 16; i++) {
            console.log("Looping");
            //Will append both ingredient and Measure if filled
            if (
              data.drinks[0][`strIngredient${i}`] &&
              data.drinks[0][`strMeasure${i}`]
            ) {
              $("#ingredientsList").append(
                "<dt>" +
                  data.drinks[0][`strIngredient${i}`] +
                  "</dt> <dd> -" +
                  data.drinks[0][`strMeasure${i}`] +
                  "</dd>"
              );
            } else if (data.drinks[0][`strIngredient${i}`]) {
              $("#ingredientsList").append(
                "<dt>" + data.drinks[0][`strIngredient${i}`] + "</dt>"
              );
            } else {
              return;
            }
          }
        });
    });
}

// meals api
$("#MButtonID").click(function () {
  //Local Variables
  var mealID;

  //Gets value from the wanting meal
  //   var meal = $("#ID").val();
  var meal = "Indian";

  //Checks to see if the meal div section is empty
  if (!$("#meal").is(":empty")) {
    //If not true, it'll empty the div before fetching another meal
    $("#meal").empty();
  }
  //Calls to fetch meal and display it
  getRecipe(meal);
  //Black Border for Meal *Austin
  $("#meal").addClass("openedMenu");
});

function getRecipe(meal) {
  var mAPI = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + meal;

  console.log(mAPI);
  fetch(mAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      console.log(meal);
      var rand = Math.floor(Math.random() * (data.meals.length - 1));
      console.log(rand);
      var mealID = data.meals[rand].idMeal;
      console.log(mealID);

      var mrAPI =
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID;
      console.log(mrAPI);
      fetch(mrAPI)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);

          $("#meal").append(
            "<img src=" +
              data.meals[0].strMealThumb +
              " alt=mealPic class=mealImg /> <h2>" +
              data.meals[0].strMeal +
              "</h2> <h3>Ingredients Needed</h3> <dl id=mingredientsList> </dl> <h3>Instructions</h3> <p>" +
              data.meals[0].strInstructions +
              "</p>"
          );
          for (var i = 1; i < 16; i++) {
            console.log("Looping");

            if (
              data.meals[0][`strIngredient${i}`] &&
              data.meals[0][`strMeasure${i}`]
            ) {
              $("#mingredientsList").append(
                "<dt>" +
                  data.meals[0][`strIngredient${i}`] +
                  "</dt> <dd> -" +
                  data.meals[0][`strMeasure${i}`] +
                  "</dd>"
              );
            } else if (data.meals[0][`strIngredient${i}`]) {
              $("#mingredientsList").append(
                "<dt>" + data.meals[0][`strIngredient${i}`] + "</dt>"
              );
            } else {
              return;
            }
          }
        });
    });
}
