import React from "react";

import Recipe from "./Recipe";
import classes from "./RecipesList.module.css";

const RecipesList = (props) => {
  return (
    <ul className={classes.recipesList}>
      {props.recipes.map((recipe) => (
        <Recipe
          getElement={props.getElement}
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
          deleteRecipe={props.deleteRecipe}
          id={recipe.id}
        />
      ))}
    </ul>
  );
};

export default RecipesList;
