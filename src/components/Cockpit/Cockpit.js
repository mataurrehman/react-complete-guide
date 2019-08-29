import React from "react";
import styles from "./Cockpit.css";
import Aux from "../../hoc/Aux";

const cockpit = props => {
  let classes = [];
  let btnClass = styles.Button;
  if (props.showPersons) {
    btnClass = [styles.Button, styles.Red].join(" ");
  }
  if (props.persons.length <= 2) {
    classes.push(styles.Red);
  }
  if (props.persons.length <= 1) {
    classes.push(styles.bold);
  }
  return (
    <Aux>
      <h1>Hi, I am a react app</h1>
      <p className={classes.join(" ")}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={props.login}>Login</button>
    </Aux>
  );
};

export default cockpit;
