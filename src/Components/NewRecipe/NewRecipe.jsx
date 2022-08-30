import React from "react";
import { RecipeForm } from "../RecipeForm/RecipeForm";
import classes from "./NewRecipe.module.css";

export const NewRecipe = (props) => {
  const saveRecipeDataHandler = (enteredRecipeData) => {
    const recipeData = {
      ...enteredRecipeData,
      id: Math.random().toString(),
    };
    props.onAddRecipe(recipeData);
    props.setIsAdding(false);
  };

  const startAddingHandler = () => {
    props.setIsAdding(true);
  };

  const stopAddingHandler = () => {
    props.setIsEditing(false);
    props.setIsAdding(false);
  };

  return (
    <div className={classes.newRecipe}>
      {!props.isAdding && !props.isEditing && (
        <button className={classes.add} onClick={startAddingHandler}>
          Add New Recipe
        </button>
      )}
      {props.isAdding || props.isEditing ? (
        <RecipeForm
          recipes={props.recipes}
          id={props.id}
          saveEditingData={props.saveEditingData}
          isEditing={props.isEditing}
          setIsEditing={props.setIsEditing}
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
