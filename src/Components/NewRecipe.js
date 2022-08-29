import React, { useState } from "react";
import RecipeForm from "./RecipeForm";
import classes from "./NewRecipe.module.css";

const NewRecipe = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const saveRecipeDataHandler = (enteredRecipeData) => {
    const recipeData = {
      ...enteredRecipeData,
      id: Math.random().toString(),
    };
    props.onAddRecipe(recipeData);
    setIsAdding(false);
  };

  const startAddingHandler = () => {
    setIsAdding(true);
  };

  const stopAddingHandler = () => {
    setIsAdding(false);
  };

  return (
    <div className={classes.newRecipe}>
      {!isAdding && (
        <button className={classes.add} onClick={startAddingHandler}>
          Add New Recipe
        </button>
      )}
      {isAdding && (
        <RecipeForm
          isEditing={props.isEditing}
          recipes={props.recipes}
          onCancel={stopAddingHandler}
          onSaveRecipeData={saveRecipeDataHandler}
        />
      )}
    </div>
  );
};

export default NewRecipe;
