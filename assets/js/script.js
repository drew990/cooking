console.log("Reading Script");

//Listens for a click on the search button and when click, it'll run the function
$("#ButtonID").click(function () {
  //Local Variables
  var dAPI;
  //Will create a new selection every time the button is press
  var drinkSelection = [];

  //Gets value from the wanting drink
  checkBoxSt = $("#Vodka").is(":checked");
  if (checkBoxSt === true) {
    drinkSelection.push($("#Vodka").val());
  }
  checkBoxSt = $("#Gin").is(":checked");
  if (checkBoxSt === true) {
    drinkSelection.push($("#Gin").val());
  }
  checkBoxSt = $("#Rum").is(":checked");
  if (checkBoxSt === true) {
    drinkSelection.push($("#Rum").val());
  }
  checkBoxSt = $("#Tequila").is(":checked");
  if (checkBoxSt === true) {
    drinkSelection.push($("#Tequila").val());
  }
  checkBoxSt = $("#Non_Alcoholic").is(":checked");
  if (checkBoxSt === true) {
    drinkSelection.push($("#Non_Alcoholic").val());
  }

  //Gets a random drink type from the section
  drink = drinkSelection[Math.floor(Math.random() * drinkSelection.length)];

  //Checks to see if the drink div section is empty
  if (!$("#drink").is(":empty")) {
    //If not true, it'll empty the div before fetching another drink
    $("#drink").empty();
  }
  //Checks if the drink is non-alcoholic
  if (drink === "Non_Alcoholic") {
    //If non-alcoholic it'll get the correct API and display it
    dAPI = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" + drink;
    //calls fetch drink to fetch it
    fetchDrink(dAPI);
  } else if (drinkSelection.length === 0) {
    drinkError();
  } else {
    dAPI = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drink;
    //calls fetch drink to fetch it
    fetchDrink(dAPI);
  }
  //Black Border for Drink option *Austin
  $("#drink").addClass("card");
  //Calls to fetch drink and display it
});

function drinkError() {
  $("#drink").append("<h1>No selections have been made</h1>");
  console.log("DRINK ERROR");
}

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
              "</h2> <h3>Ingredients Needed</h3><div class=ingredients> <ol id=ingredientsList> </ol><br/></div> <h3>Instructions</h3> <p>" +
              data.drinks[0].strInstructions +
              "</p>"
          );
          $(".ingredients").addClass("wrapper");

          //Loops through the ingredients and measurements and appends them in the list
          for (var i = 1; i < 16; i++) {
            //Will append both ingredient and Measure if filled
            if (
              data.drinks[0][`strIngredient${i}`] &&
              data.drinks[0][`strMeasure${i}`]
            ) {
              $("#ingredientsList").append(
                "<li>" +
                  data.drinks[0][`strIngredient${i}`] +
                  " - " +
                  data.drinks[0][`strMeasure${i}`] +
                  "</li>"
              );
            } else if (data.drinks[0][`strIngredient${i}`]) {
              $("#ingredientsList").append(
                "<li>" + data.drinks[0][`strIngredient${i}`] + "</li>"
              );
            } else {
              return;
            }
          }
        });
    });
}

function foodError() {
  $("#meal").append("<h1>No selections have been made</h1>");
  console.log("DRINK ERROR");
}

// meals api
$("#MButtonID").click(function () {
  //Local Variables
  var meal,
    foodSelection = [];

  //Gets value from the wanting drink
  checkBoxSt = $("#American").is(":checked");
  if (checkBoxSt === true) {
    foodSelection.push($("#American").val());
  }
  checkBoxSt = $("#Chinese").is(":checked");
  if (checkBoxSt === true) {
    foodSelection.push($("#Chinese").val());
  }
  checkBoxSt = $("#French").is(":checked");
  if (checkBoxSt === true) {
    foodSelection.push($("#French").val());
  }
  checkBoxSt = $("#Indian").is(":checked");
  if (checkBoxSt === true) {
    foodSelection.push($("#Indian").val());
  }
  checkBoxSt = $("#Italian").is(":checked");
  if (checkBoxSt === true) {
    foodSelection.push($("#Italian").val());
  }
  checkBoxSt = $("#Italian").is(":checked");
  if (checkBoxSt === true) {
    foodSelection.push($("#Italian").val());
  }
  checkBoxSt = $("#Italian").is(":checked");
  if (checkBoxSt === true) {
    foodSelection.push($("#Italian").val());
  }
  checkBoxSt = $("#Mexican").is(":checked");
  if (checkBoxSt === true) {
    foodSelection.push($("#Mexican").val());
  }
  checkBoxSt = $("#Japanese").is(":checked");
  if (checkBoxSt === true) {
    foodSelection.push($("#Japanese").val());
  }

  //Gets value from the wanting meal
  meal = foodSelection[Math.floor(Math.random() * foodSelection.length)];

  //Checks to see if the meal div section is empty
  if (!$("#meal").is(":empty")) {
    //If not true, it'll empty the div before fetching another meal
    $("#meal").empty();
  }

  if (foodSelection.length === 0) {
    foodError();
  } else {
    //Calls to fetch meal and display it
    getRecipe(meal);
  }
  //Black Border for Meal *Austin
  $("#meal").addClass("card");
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
              "</h2> <h3>Ingredients Needed</h3> <div class=ingredients> <ol id=mingredientsList> </ol><br/></div> <h3>Instructions</h3> <p>" +
              data.meals[0].strInstructions +
              "</p>"
          );
          $(".ingredients").addClass("wrapper");

          for (var i = 1; i < 16; i++) {
            if (
              data.meals[0][`strIngredient${i}`] &&
              data.meals[0][`strMeasure${i}`]
            ) {
              $("#mingredientsList").append(
                "<li>" +
                  data.meals[0][`strIngredient${i}`] +
                  " - " +
                  data.meals[0][`strMeasure${i}`] +
                  "</li>"
              );
            } else if (data.meals[0][`strIngredient${i}`]) {
              $("#mingredientsList").append(
                "<li>" + data.meals[0][`strIngredient${i}`] + "</li>"
              );
            } else {
              return;
            }
          }
        });
    });
}
