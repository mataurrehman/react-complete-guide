import React, {PureComponent, Component} from 'react';
import styles from '../containers/App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
class App extends PureComponent {
  constructor(props){
    super(props);
  }
  state = {
    persons: [
      {id:1, name:"Ata ur Rehman", "age":"28"},
      {id:2, name:"Ahmad", "age":"13"},
      {id:3, name:"Mushi", "age":"29"},
    ],
    showPersons: false
  }
  handleTogglePerson = () => {
    let toShow = this.state.showPersons;
    this.setState({showPersons: !toShow});
  }
   deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons})
  }
  handleChangeName = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id===id;
    })
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons})
  };
  render(){
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.handleChangeName}
          />
        </div>
      )
    }
    return (<div className={styles.App}>
      <Cockpit
        persons = {this.state.persons}
        showPersons = {this.state.showPersons}
        clicked = {this.handleTogglePerson}
      />
      {persons}
    </div>
    );
  }
}

export default App;
