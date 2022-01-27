import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import { MainContainer } from "./HomeStyle";
import Card from "./Card";

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = "8582304d";
const APP_KEY = "9e7ed331a666c12633ac635c4eb19b07";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState("");
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      console.log(result.data);
      if (!result.data.more) {
        alert("Not found any food with this name");
      }
      setRecipes(result.data.hits);
      setQuery("");
    } else {
      alert("Please fill the form");
    }
  };

  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
      {recipes && (
        <MainContainer>
          {recipes.map((recipe, index) => (
            <Card key={index} recipe={recipe.recipe} />
          ))}
        </MainContainer>
      )}
    </div>
  );
};

export default Home;
