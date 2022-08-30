import React, { useState } from "react";
import classes from "./RecipeForm.module.css";

export const RecipeForm = (props) => {
  const [message, setMessage] = useState("");
  const [editingTitle, setEditingTitle] = useState(props.recipeEdit.title);
  const [editingDescription, setEditingDescription] = useState(
    props.recipeEdit.description
  );
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const titleChangeHandler = (event) => {
    setMessage("");
    props.isEditing
      ? setEditingTitle(event.target.value)
      : setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setMessage("");
    props.isEditing
      ? setEditingDescription(event.target.value)
      : setEnteredDescription(event.target.value);
  };

  const validate = (title, desc) => {
    if (title === "" || desc === "") {
      setMessage("Everything must be filled out");
      return false;
    } else if (
      props.recipes.some((element) => {
        return element.title === title;
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
    if (validate(enteredTitle, enteredDescription)) {
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
    if (validate(editingTitle, editingDescription)) {
      const recipeData = {
        title: editingTitle,
        description: editingDescription,
      };
      props.saveEditingData(recipeData, props.recipeEdit.id);
      props.onCancel();
    } else {
      props.setIsEditing(true);
    }
  };

  return (
    <form onSubmit={!props.isEditing ? submitHandler : onSaveEditDataHandler}>
      <div>
        <div>
          <input
            placeholder="Title"
            className={classes.input}
            type="text"
            value={props.isEditing ? editingTitle : enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div>
          <input
            placeholder="Description"
            className={classes.input}
            type="text"
            value={props.isEditing ? editingDescription : enteredDescription}
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


