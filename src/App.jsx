import React, { useState } from 'react';
import uuidv4 from 'uuid/v4';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

let initialState = [
    {
        id : uuidv4(),
        title : 'todo 1',
    },

    {
        id : uuidv4(),
        title : 'todo 2',
    },

    {
        id : uuidv4(),
        title : 'todo 3',
    },
];

export default () => {
    const [list, setList] = useState(initialState);

    const addTodo = todo => {
        console.log('in add todo, todo is : ' , todo);
        // list.push(todo);
        setList([...list, todo]);
        console.log('list is : ', list);
    };

    return (
        <div>
            <TodoList list={list} />
            <TodoForm addTodo={addTodo} />
        </div>
    )
}