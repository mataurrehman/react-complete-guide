import React, { PureComponent } from "react";
import styles from "../containers/App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/Aux";
import WithClass from "../hoc/WithClass";
export const AuthContext = React.createContext(false);
class App extends PureComponent {
  componentWillMount() {
    console.log("[app.js] inside componentWillMount");
  }
  componentDidMount() {
    console.log("[app.js] inside componentDidMount");
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[update app.js] inside shouldComponentUpdate");

  //   return (
  //     nextState.showPersons !== this.state.showPersons ||
  //     nextState.persons !== this.state.persons
  //   );
  // }
  componentWillReceiveProps(nextProps, nextState) {
    console.log("[update app.js] inside componentWillReceiveProps");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "[app.js update] inside getDerivedStateFromProps",
      nextProps,
      prevState
    );
    return prevState;
  }
  getSnapshotBeforeUpdate() {
    console.log("[app.js update] inside getSnapshotBeforeUpdate");
  }
  componentDidUpdate() {
    console.log("[update app.js] inside componentDidUpdate");
  }
  state = {
    persons: [
      { id: 1, name: "Ata", age: "28" },
      { id: 2, name: "Ahmad", age: "13" },
      { id: 3, name: "Ali", age: "29" }
    ],
    showPersons: false,
    authenticated: false,
    toggleClicked: 0
  };
  loginHandler = () => {
    this.setState({ authenticated: true });
  };
  handleTogglePerson = () => {
    let toShow = this.state.showPersons;
    this.setState({ showPersons: !toShow });
  };
  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };
  handleChangeName = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  };
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.handleChangeName}
          />
        </div>
      );
    }
    return (
      <Aux classes={styles.App}>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.handleTogglePerson}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default WithClass(App, styles.App);
