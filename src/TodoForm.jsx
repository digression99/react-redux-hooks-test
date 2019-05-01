import React, { useState } from 'react';
import uuidv4 from 'uuid/v4';

export default ({ addTodo }) => {
    const [title, setTitle] = useState('');

    const onFormSubmit = () => {
        console.log('title is : ', title);
        addTodo({ id : uuidv4(), title });
        setTitle('');
    };

    return (
        <div>
            <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
            <button onClick={onFormSubmit}>Add</button>
        </div>
    )
};