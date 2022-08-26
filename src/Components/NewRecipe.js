import React, { useState } from "react";
import RecipeForm from "./RecipeForm";
import classes from "./NewRecipe.module.css";

const NewRecipe = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const saveRecipeDataHandeler = (enteredRecipeData) => {
    const recipeData = {
      ...enteredRecipeData,
      id: Math.random().toString(),
    };
    props.onAddRecipe(recipeData);
    setIsAdding(false);
  };

  const startEditingHandler = () => {
    setIsAdding(true);
  };

  const stopEditingHandler = () => {
    setIsAdding(false);
  };

  return (
    <div className={classes.newRecipe}>
      {!isAdding && (
        <button className={classes.add} onClick={startEditingHandler}>
          Add New Recipe
        </button>
      )}
      {isAdding && (
        <RecipeForm
          onCancel={stopEditingHandler}
          onSaveRecipeData={saveRecipeDataHandeler}
        />
      )}
    </div>
  );
};

export default NewRecipe;
