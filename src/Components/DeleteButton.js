import React from "react";
import classes from "./DeleteButton.module.css";

const DeleteButton = (props) => {
  const deleteHandler = () => {
    props.deleteRecipe(props.id);
  };
  return (
    <button type="submit" className={classes.delete} onClick={deleteHandler}>
      Delete
    </button>
  );
};

export default DeleteButton;
