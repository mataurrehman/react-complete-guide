import React, { useState, useEffect } from 'react';
import axios from 'axios';

const todo = () => {
    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState([]);

    const inputChangeHandler = (value) => {
        setTodoName(value);
    };

    useEffect(()=> {
        axios.get('https://test-b3584.firebaseio.com/todos.json')
        .then(result => {
            console.log(result);
            const todoData = result.data;
            const todos = [];
            for (const key in todoData) {
                todos.push({id:key, name:todoData[key].name});
            }
            setTodoList(todos);
        });
    }, []);

    const todoAddHandler = () => {
        setTodoList(todoList.concat(todoName));
        axios.post('https://test-b3584.firebaseio.com/todos.json', {name: todoName})
        .then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        });
    };
    return (
        <React.Fragment>
            <input type="text" placeholder="Todo" onChange={(event) => inputChangeHandler(event.target.value)} value={todoName}/>
            <button type="button" onClick={todoAddHandler}>Add</button>
            <ul>
                {todoList.map(todo => <li key={todo.id}>{todo.name}</li>)}
            </ul>
        </React.Fragment>
    );
};

export default todo;
