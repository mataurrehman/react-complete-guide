import React, { Component } from "react";

import styles from "./Person.css";
import WithClass from "../../../hoc/WithClass";
import Aux from "../../../hoc/Aux";
import { AuthContext } from "../../../containers/App";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }
  componentWillMount() {
    console.log("[person.js] inside componentWillMount");
  }
  componentDidMount() {
    console.log("[person.js] inside componentDidMount");
    if (this.props.position === 0) this.inputElement.current.focus();
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[update person.js] inside shouldComponentUpdate");
    return true;
  }
  componentWillReceiveProps(nextProps, nextState) {
    console.log("[update person.js] inside componentWillReceiveProps");
  }
  componentDidUpdate() {
    console.log("[update person.js] inside componentDidUpdate");
  }
  focus() {
    this.inputElement.current.focus();
  }

  render() {
    const props = this.props;
    return (
      <Aux classes={styles.Person}>
        <AuthContext.Consumer>
          {auth => (auth ? "I am Auth" : null)}
        </AuthContext.Consumer>

        <p onClick={props.click}>
          User {props.name} with age of {props.age}{" "}
        </p>
        <p>{props.children}</p>
        <input
          type="text"
          ref={this.inputElement}
          onChange={props.changed}
          value={props.name}
        />
      </Aux>
    );
  }
}
export default WithClass(Person, styles.Person);
