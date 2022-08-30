import React from "react";
import { DeleteButton } from '../DeleteButton/DeleteButton';
import classes from "./Recipe.module.css";

export const Recipe = (props) => {
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
