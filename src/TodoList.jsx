import React from 'react';
import Todo from './Todo';

export default ({ list }) => {

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
