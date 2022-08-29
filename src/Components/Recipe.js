import React from "react";
import classes from "./Recipe.module.css";
import DeleteButton from "./DeleteButton";

const Recipe = (props) => {
  const editButtonHandler = () => {
    props.getElement(props.id);
  };
  return (
    <div className={classes.recipe}>
      <div>
        <h3>{props.title}</h3>
        <DeleteButton id={props.id} deleteRecipe={props.deleteRecipe} />
        <button
          className={classes.editButton}
          type="submit"
          onClick={editButtonHandler}
        >
          Edit
        </button>
      </div>
      <p>{props.description}</p>
    </div>
  );
};

export default Recipe;
