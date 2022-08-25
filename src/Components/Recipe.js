import React from "react";
import classes from "./Recipe.module.css";

const Recipe = (props) => {
  return (
    <div className={classes.recipe}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Recipe;
