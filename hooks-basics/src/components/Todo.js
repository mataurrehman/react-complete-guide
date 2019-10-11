import React, { useState, useEffect, useReducer, useRef } from 'react';
import axios from 'axios';

const todo = () => {
    // const [todoName, setTodoName] = useState('');
    // const [todoList, setTodoList] = useState([]);
    // const [submittedTodo, setSubmittedTodo] = useState(null);
    const todoInputRef = useRef();

    const todoListReducer = (state, action) => {
        switch (action.type) {
          case 'ADD':
            return state.concat(action.payload);
          case 'SET':
            return action.payload;
          case 'REMOVE':
            return state.filter(todo => todo.id !== action.payload);
          default:
            return state;
        }
      };

    const [todoList, dispatch] = useReducer(todoListReducer, []);

    // const inputChangeHandler = (value) => {
    //     setTodoName(value);
    // };


    useEffect(()=> {
        axios.get('https://test-b3584.firebaseio.com/todos.json')
        .then(result => {
            const todoData = result.data;
            const todos = [];
            for (const key in todoData) {
                todos.push({id:key, name:todoData[key].name});
            }
            dispatch({ type: 'SET', payload: todos });

        });
        // return () => {
        //     console.log('Cleanup');
        //   };
        }, []);

    const mouseMoveHandler = event => {
        console.log(event.clientX, event.clientY);
    };

    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveHandler);
        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
          };
    }, []);

    // useEffect(() => {
    //     if(submittedTodo){
    //         setTodoList(todoList.concat(submittedTodo))
    //     }
    // }, [submittedTodo]);

    const todoAddHandler = () => {
        const todoName = todoInputRef.current.value;

        axios.post('https://test-b3584.firebaseio.com/todos.json', {name: todoName})
        .then(res => {
            setTimeout(() => {
                const todoItem = { id: res.data.name, name: todoName };
                dispatch({ type: 'ADD', payload: todoItem });
            }, 3000);
        }).catch(error => {
            console.log(error);
        });
    };
    const todoRemoveHandler = todoId => {
        axios
          .delete(`https://test-b3584.firebaseio.com/todos/${todoId}.json`)
          .then(res => {
            dispatch({ type: 'REMOVE', payload: todoId });
          })
          .catch(err => console.log(err));
      };
    return (
        <React.Fragment>
            <input type="text"
                placeholder="Todo"
                ref={todoInputRef}
            />
            <button type="button" onClick={todoAddHandler}>Add</button>
            <ul>
                {todoList.map(todo => <li key={todo.id} onClick={todoRemoveHandler.bind(this, todo.id)}>{todo.name}</li>)}
            </ul>
        </React.Fragment>
    );
};

export default todo;
