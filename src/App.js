import React, {Component} from 'react';
import './App.css';
import Person from './Person/person'

class App extends Component {
  state = {
    persons: [
      {id:1, name:"Ata ur rehman", "age":"28"},
      {id:2, name:"Ahmad", "age":"13"},
      {id:3, name:"Mushi", "age":"29"},
    ],
    showPersons: true
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
          {this.state.persons.map((person, index) =>
            <Person
              click = {() => this.deletePersonHandler(index)}
              changed = {(event) => this.handleChangeName(event, person.id)}
              name={person.name}
              age={person.age}
              key={person.id}
             />
          )
          }
        </div>
      )
    }
    return (
      <div className="App">
        <button onClick={this.handleChangeName}>Change Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
