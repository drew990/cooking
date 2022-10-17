import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomMeal = () => {
  const [posts, setPosts] = useState([]);
  let YoutubeLink;

  const fetchPost = async () => {
    const response = await axios(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    // console.log(response.data.meals[0]);
    setPosts(response.data.meals[0]);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  console.log(posts);
  console.log(posts.strYoutube);

  YoutubeLink = `"${posts.strYoutube}"`;
  console.log(YoutubeLink);

  return (
    <div className="food-container">
      <div>
        <button onClick={fetchPost}>Give Me A Recipe</button>
      </div>
      <div className="flex" style={{ marginBottom: "3rem" }}>
        <img src={posts.strMealThumb} alt="Food Pic Here" />
        <div className="food-meal-display">
          <h3>{posts.strMeal}</h3>
          <h4>
            Category: {posts.strCategory} <br /> Area: {posts.strArea}
          </h4>
        </div>
      </div>
      <div className="flex" style={{ alignItems: "normal" }}>
        <div className="ingredient-div">
          <h5>Ingredients Needed</h5>
          <ul className="ingredient">
            {posts.strIngredient1 ? <li>{posts.strIngredient1}</li> : <></>}
            {posts.strIngredient2 ? <li>{posts.strIngredient2}</li> : <></>}
            {posts.strIngredient3 ? <li>{posts.strIngredient3}</li> : <></>}
            {posts.strIngredient4 ? <li>{posts.strIngredient4}</li> : <></>}
            {posts.strIngredient5 ? <li>{posts.strIngredient5}</li> : <></>}
            {posts.strIngredient6 ? <li>{posts.strIngredient6}</li> : <></>}
            {posts.strIngredient7 ? <li>{posts.strIngredient7}</li> : <></>}
            {posts.strIngredient8 ? <li>{posts.strIngredient8}</li> : <></>}
            {posts.strIngredient9 ? <li>{posts.strIngredient9}</li> : <></>}
            {posts.strIngredient10 ? <li>{posts.strIngredient10}</li> : <></>}
            {posts.strIngredient11 ? <li>{posts.strIngredient11}</li> : <></>}
            {posts.strIngredient12 ? <li>{posts.strIngredient12}</li> : <></>}
            {posts.strIngredient13 ? <li>{posts.strIngredient13}</li> : <></>}
            {posts.strIngredient14 ? <li>{posts.strIngredient14}</li> : <></>}
            {posts.strIngredient15 ? <li>{posts.strIngredient15}</li> : <></>}
            {posts.strIngredient16 ? <li>{posts.strIngredient16}</li> : <></>}
            {posts.strIngredient17 ? <li>{posts.strIngredient17}</li> : <></>}
            {posts.strIngredient18 ? <li>{posts.strIngredient18}</li> : <></>}
            {posts.strIngredient19 ? <li>{posts.strIngredient19}</li> : <></>}
            {posts.strIngredient20 ? <li>{posts.strIngredient20}</li> : <></>}
          </ul>
        </div>
        <div className="measurements-div">
          <h5>Measurements</h5>
          <ul className="ingredient">
            {posts.strMeasure1 && posts.strMeasure1 != " " ? (
              <li>{posts.strMeasure1}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure2 && posts.strMeasure2 != " " ? (
              <li>{posts.strMeasure2}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure3 && posts.strMeasure3 != " " ? (
              <li>{posts.strMeasure3}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure4 && posts.strMeasure4 != " " ? (
              <li>{posts.strMeasure4}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure5 && posts.strMeasure5 != " " ? (
              <li>{posts.strMeasure5}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure6 && posts.strMeasure6 != " " ? (
              <li>{posts.strMeasure6}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure7 && posts.strMeasure7 != " " ? (
              <li>{posts.strMeasure7}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure8 && posts.strMeasure8 != " " ? (
              <li>{posts.strMeasure8}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure9 && posts.strMeasure9 != " " ? (
              <li>{posts.strMeasure9}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure10 && posts.strMeasure10 != " " ? (
              <li>{posts.strMeasure10}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure11 && posts.strMeasure11 != " " ? (
              <li>{posts.strMeasure11}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure12 && posts.strMeasure12 != " " ? (
              <li>{posts.strMeasure12}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure13 && posts.strMeasure13 != " " ? (
              <li>{posts.strMeasure13}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure14 && posts.strMeasure14 != " " ? (
              <li>{posts.strMeasure14}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure15 && posts.strMeasure15 != " " ? (
              <li>{posts.strMeasure15}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure16 && posts.strMeasure16 != " " ? (
              <li>{posts.strMeasure16}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure17 && posts.strMeasure17 != " " ? (
              <li>{posts.strMeasure17}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure18 && posts.strMeasure18 != " " ? (
              <li>{posts.strMeasure18}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure19 && posts.strMeasure19 != " " ? (
              <li>{posts.strMeasure19}</li>
            ) : (
              <></>
            )}
            {posts.strMeasure20 && posts.strMeasure20.length != 1 ? (
              <li>{posts.strMeasure20}</li>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
      <h5 style={{ paddingTop: "1rem" }}>Instructions</h5>
      {/* {posts.strYoutube ? (
        <iframe
          width="560"
          height="315"
          src={{ YoutubeLink }}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <></>
      )} */}

      <p className="food-container-text">{posts.strInstructions}</p>
    </div>
  );
};

export default function FoodGen() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
        );

        setData(response.data.meals);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="Food-Gen">
      <RandomMeal />
    </div>
  );
}

{
  /* 
  //NOTES
  //==========
  //This code is to get meals by category
<h2>Meals By Category</h2>
      <select>
        <option> Select</option>
        {data &&
          data.map(({ strCategory }) => (
            <option key={strCategory} value={strCategory}>
              {strCategory}
            </option>
          ))}
      </select>
      {/* Loading Section */
  //{loading && <div>A moment please...</div>}
  //{/* Gives Error if it can't load */}
  //{error && (
  //<div>{`There is a problem fetching the post data - ${error}`}</div>
  //)}
  //<div>
  //<button>Give Me Recipe</button>
  //</div> */}
}
