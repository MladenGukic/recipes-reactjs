import React, { useState } from "react";
import classes from "./RecipeForm.module.css";

const RecipeForm = (props) => {
  const [message, setMessage] = useState();
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const validate = () => {
    if (enteredTitle === "" || enteredDescription === "") {
      setMessage("Everything must be filled out");
      return false;
    } else if (
      props.recipes.some((element) => {
        return element.title === enteredTitle;
      }) &&
      !props.isEditing
    ) {
      setMessage("The recipe already exists");
      return false;
    }
    return true;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (validate()) {
      const recipeData = {
        title: enteredTitle,
        description: enteredDescription,
      };

      props.onSaveRecipeData(recipeData);

      setEnteredTitle("");
      setEnteredDescription("");
    }
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
      <strong className={classes.message}>{message}</strong>
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
