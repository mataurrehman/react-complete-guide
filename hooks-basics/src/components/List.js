import React from 'react';

const List = (props) => {
    return (
        <ul>
        {props.items.map(todo => <li key={todo.id} onClick={props.onClick.bind(this, todo.id)}>{todo.name}</li>)}
        </ul>
    );
};

export default List;
