import React from 'react';
import Todo from './Todo';
import { useSelector } from 'react-redux';

export default () => {
    const list = useSelector(state => state);

    if (list.length < 1) return null;

    return (
        <>
            {list.map(todo => (
                <Todo key={todo.id} title={todo.title} />
            ))}
            <div>List length : {list.length}</div>
        </>
    )
};
