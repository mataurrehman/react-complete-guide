import React, {Component} from 'react'

import styles from './Person.css'

class Person extends Component {
    render(){
        let props = this.props
        return(
            <div className={styles.Person}>
                <p onClick={props.click}> User {props.name} with age of {props.age} </p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name} />
            </div>
        )
    }
}
export default Person;
