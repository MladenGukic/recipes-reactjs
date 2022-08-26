import React from "react";
import classes from "./Recipe.module.css";
import DeleteButton from "./DeleteButton";

const Recipe = (props) => {
  return (
    <div className={classes.recipe}>
      <h3>{props.title}</h3>
      <DeleteButton id={props.id} deleteRecipe={props.deleteRecipe} />
      <p>{props.description}</p>
    </div>
  );
};

export default Recipe;
