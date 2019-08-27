import React, {Component} from 'react'
import Person from './Person/person'

class Persons extends Component{
  render(){
    let props = this.props

    return props.persons.map((person, index) => {
      return <Person
          key={person.id}
          click = {() => props.clicked(index)}
          changed = {(event) => props.changed(event, person.id)}
          name={person.name}
          age={person.age}
       />
    })
  }
}
export default Persons;
