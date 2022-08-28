import React from "react";
import classes from "./PageNumber.module.css";

const PageNumber = (props) => {
  const changePageHandler = () => {
    props.setSelectedPage(props.number);
    props.changePage(props.number);
  };
  return (
    <div id="page" className={classes.page} onClick={changePageHandler}>
      {props.number}
    </div>
  );
};

export default PageNumber;
