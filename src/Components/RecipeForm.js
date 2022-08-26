import React, { useState } from "react";
import classes from "./RecipeForm.module.css";

const RecipeForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const recipeData = {
      title: enteredTitle,
      description: enteredDescription,
    };

    props.onSaveRecipeData(recipeData);

    setEnteredTitle("");
    setEnteredDescription("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <input
            placeholder="Title"
            className={classes.input}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div>
          <input
            placeholder="Description"
            className={classes.input}
            type="text"
            onChange={descriptionChangeHandler}
          />
        </div>
      </div>
      <div>
        <button
          onClick={props.onCancel}
          className={classes.cancel}
          type="button"
        >
          Cancel
        </button>
        <button className={classes.add} type="submit">
          Add Recipe
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;
