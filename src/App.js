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
    showPersons: false
  }
  handleTogglePeople = () => {
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
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
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
      style.backgroundColor='red';
    }
    let classes = [];
    if(this.state.persons.length<=2) {
      classes.push('red');
    } if(this.state.persons.length<=1){
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p className={classes.join(" ")}>This is really working</p>

        <button
          onClick={() => this.handleTogglePeople()}
          style={style}
        >Toggle Users</button>
        {persons}
      </div>
    );
  }
}

export default App;
