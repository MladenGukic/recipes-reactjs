import React from "react";
import { PageNumber } from "../PageNumber/PageNumber";
import classes from "./Paginator.module.css";

export const Paginator = (props) => {
  const arrayOfNumber = Array.from({ length: props.number }, (_, i) => i + 1); //this is a function returns array with elements of each number until it is equal to the given number starting with 1
  return (
    <ul className={classes.pages}>
      {arrayOfNumber.map((num, index) => {
        return (
          <PageNumber
            setSelectedPage={props.setSelectedPage}
            changePage={props.changePage}
            key={index}
            number={num}
          />
        );
      })}
    </ul>
  );
};
