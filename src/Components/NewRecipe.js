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
    props.setIsEditing(false);
    setIsAdding(false);
  };

  return (
    <div className={classes.newRecipe}>
      {!isAdding && !props.isEditing && (
        <button className={classes.add} onClick={startAddingHandler}>
          Add New Recipe
        </button>
      )}
      {isAdding || props.isEditing ? (
        <RecipeForm
          recipes={props.recipes}
          id={props.id}
          saveEditingData={props.saveEditingData}
          isEditing={props.isEditing}
          recipeEdit={props.recipeEdit}
          onCancel={stopAddingHandler}
          onSaveRecipeData={saveRecipeDataHandler}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default NewRecipe;
