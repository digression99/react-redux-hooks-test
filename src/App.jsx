import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default () => {

    return (
        <div>
            <TodoList />
            <TodoForm />
        </div>
    )
}