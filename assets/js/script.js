console.log("Reading Script");

//Listens for a click on the search button and when click, it'll run the function
$("#ButtonID").click(function () {
  //Local Variables
  var drinkID;

  //Gets value from the wanting drink
  //   var drink = $("#ID").val();
  var drink = "Non_Alcoholic";

  //Checks to see if the drink div section is empty
  if (!$("#drink").is(":empty")) {
    //If not true, it'll empty the div before fetching another drink
    $("#drink").empty();
  }
  //Calls to fetch drink and display it
  fetchDrink(drink);
});

//Fetches a drink API
function fetchDrink(drink) {
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

/*mAPI="www.themealdb.com/api/json/v1/1/filter.php?a=" + foodChoice; 
fetch(mAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });*/

/*mrAPI="www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+mealID;
fetch(mrAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });*/

function getRecipe() {
  // value of food selection
  var foodChoice = $("input[name=selector]:checked").val();

  mAPI = "www.themealdb.com/api/json/v1/1/filter.php?a=" + foodChoice;
  fetch(mAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });

  console.log(foodChoice);
  var rand = Math.floor(Math.random() * response.meals.length);
  console.log(response.meals.length);
  var mealID = response.meals[rand].idMeal;
  console.log(mealId);

  mrAPI = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + mealID;
  fetch(mrAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
