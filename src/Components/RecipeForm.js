import React, { useState } from "react";
import classes from "./RecipeForm.module.css";

const RecipeForm = (props) => {
  const [message, setMessage] = useState();
  const [enteredTitle, setEnteredTitle] = useState(props.recipeEdit.title);
  const [enteredDescription, setEnteredDescription] = useState(
    props.recipeEdit.description
  );

  const titleChangeHandler = (event) => {
    setMessage("");
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setMessage("");
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

  const onSaveEditDataHandler = (event) => {
    event.preventDefault();
    if (validate()) {
      const recipeData = {
        title: enteredTitle,
        description: enteredDescription,
      };
      props.saveEditingData(recipeData, props.recipeEdit.id);
    }
    props.onCancel();
  };

  return (
    <form onSubmit={!props.isEditing ? submitHandler : onSaveEditDataHandler}>
      <div>
        <div>
          <input
            placeholder="Title"
            className={classes.input}
            type="text"
            value={props.isEditing ? enteredTitle : ""}
            onChange={titleChangeHandler}
          />
        </div>
        <div>
          <input
            placeholder="Description"
            className={classes.input}
            type="text"
            value={props.isEditing ? enteredDescription : ""}
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
        <button
          className={!props.isEditing ? classes.add : classes.displayNone}
          type="submit"
        >
          Add Recipe
        </button>
        <button
          className={props.isEditing ? classes.add : classes.displayNone}
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;
