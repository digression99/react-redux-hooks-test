import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuidv4 from 'uuid/v4';

export default () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const onFormSubmit = () => {
        const newTodo = {
            id : uuidv4(),
            title
        };

        dispatch({ type : 'ADD_TODO', payload : newTodo });
        setTitle('');
    };

    return (
        <div>
            <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
            <button onClick={onFormSubmit}>Add</button>
        </div>
    )
};