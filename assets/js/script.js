console.log("Reading Script");


















































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
    var foodChoice=$("input[name=selector]:checked").val();

        mAPI="www.themealdb.com/api/json/v1/1/filter.php?a=" + foodChoice; 
        fetch(mAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });

    console.log(foodChoice);
    var rand = Math.floor((Math.random() * response.meals.length));
    console.log(response.meals.length);
    var mealID = (response.meals[rand].idMeal);
    console.log(mealId);

        mrAPI="www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+mealID;
        fetch(mrAPI)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data);
        });
        
}
