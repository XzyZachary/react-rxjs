import React from 'react';

import TodoItem from './TodoItem';
import { useEffect } from 'react';

export default function TodoList(props) {
    const { todos, onToggleAllClick } = props;
    useEffect(() => {})
    return (
        <section className='main'>
            <input type='checkbox' className='toggle-all' onChange={onToggleAllClick}></input>
            <ul className='todo-list'>
                {
                    todos && todos.map(todo => <TodoItem key={todo.id} todo={todo} {...props}></TodoItem>)
                }
            </ul>
        </section>
    )
}