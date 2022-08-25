import React from "react";

import Recipe from "./Recipe";
import classes from "./RecipesList.module.css";

const RecipesList = (props) => {
  return (
    <ul className={classes.recipesList}>
      {props.recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
        />
      ))}
    </ul>
  );
};

export default RecipesList;
