import React from "react";
import { PageNumber } from '../PageNumber/PageNumber';
import classes from "./Pages.module.css";

export const Pages = (props) => {
  const arrayOfNumber = Array.from({ length: props.number }, (_, i) => i + 1);
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
