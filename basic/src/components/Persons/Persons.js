import React, { PureComponent } from "react";
import Person from "./Person/person";

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log("[Persons.js] inside componentWillMount");
  }
  componentDidMount() {
    console.log("[Persons.js] inside componentDidMount");
    this.lastPersonRef.current.focus();
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[update Persons.js] inside shouldComponentUpdate");
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.clicked !== this.props.clicked ||
  //     nextProps.changed !== this.props.changed
  //   );
  // }
  componentWillReceiveProps(nextProps, nextState) {
    console.log("[update Persons.js] inside componentWillReceiveProps");
  }
  componentDidUpdate() {
    console.log("[update Persons.js] inside componentDidUpdate");
  }
  render() {
    let props = this.props;

    return props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => props.clicked(index)}
          changed={event => props.changed(event, person.id)}
          name={person.name}
          age={person.age}
          position={index}
          ref={this.lastPersonRef}
        />
      );
    });
  }
}
export default Persons;
