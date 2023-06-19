import { useCallback, useEffect, useState } from "react"
import todoService from '../services/todoService';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import { useParams } from 'react-router-dom';
import { useMemo } from "react";


export default function Todos(props) {
    const [todos, setTodos] = useState([])
    let todo$;

    const { filter } = useParams();

    useEffect(() => {
        todo$ = todoService.todo$.subscribe(todos => {
            setTodos(todos);
        })
        return () => {
            todo$.unsubscribe();
        }
    })



    const remainingCount = todos.filter(todo => !todo.completed).length;
    const hasCompleted = todos.length > remainingCount;

    const getVisibleTodos = useMemo(() => {
        console.log(312321, todos)
        switch (filter) {
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    }, [todos])

    const handleAdd = (title) => {
        todoService.add(title)
    }
    const handleRemove = (uuid) => {
        todoService.remove(uuid)
    }
    const handleRemoveCompleted = () => {
        todoService.removeCompleted();
    }
    const handleToggle = (uuid) => {
        todoService.toggle(uuid)
    }
    const handleToggleAll = (event) => {
        todoService.toggleAll(event.target.checked)
    }
    const handleUpdate = (uuid, newTitle) => {
        todoService.update(uuid, newTitle)
    }

    return (
        <section className="todoapp">
            <TodoHeader onKeyDown={handleAdd}></TodoHeader>
            <TodoList todos={getVisibleTodos} onRemoveClick={handleRemove} onToggleClick={handleToggle} onToggleAllClick={handleToggleAll} onUpdate={handleUpdate}></TodoList>
            <TodoFooter remainingCount={remainingCount} hasCompleted={hasCompleted} onClearCompletedClick={handleRemoveCompleted}></TodoFooter>
        </section>
    )
}