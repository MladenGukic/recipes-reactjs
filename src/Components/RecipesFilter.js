import React from "react";
import classes from "./RecipesFilter.module.css";

const RecipesFilter = (props) => {
  const filterHandler = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <input
      placeholder="filter"
      type="text"
      className={classes.filter}
      onChange={filterHandler}
    />
  );
};

export default RecipesFilter;
