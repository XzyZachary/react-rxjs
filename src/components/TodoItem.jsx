import classnames from 'classnames';
import { useEffect } from 'react';
import { useState } from 'react';

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

export default function TodoItem({ todo, onRemoveClick, onToggleClick, onUpdate }) {
    const [editing, setEditing] = useState(false)
    const [editTitle, setEditTitle] = useState(todo.title)

    const handleChange = (event) => {
        setEditTitle(event.target.value)
    }

    useEffect(() => {
        console.log(23213, todo)
    }, [todo])
    const handleEdit = () => {
        setEditing(true);
    }

    const handleKeyDown = ({ keyCode }) => {
        if (keyCode == ESCAPE_KEY) {
            handleTop()
        } else if (keyCode === ENTER_KEY) {
            handleStop()
        }
    }

    const handleStop = () => {
        setEditing(false)
        handleSumbit()
    }

    const handleSumbit = () => {
        if (editTitle.trim().length) {
            onUpdate(todo.id, editTitle)
        } else {
            onRemoveClick(todo.id)
        }
    }

    const liClass = classnames({
        completed: todo.completed,
        editing  : editing
    });
  

    return (
        <li className={liClass}>
            <div className='view'>
                <input type='checkbox' className='toggle' checked={todo.completed}  onChange={() => onToggleClick(todo.id)} />
                <label onDoubleClick={handleEdit}>{todo.title}</label>
                <button className='destory' onClick={() => onRemoveClick(todo.id)}></button>
            </div>
            <input type='text' className='edit' value={editTitle} onChange={handleChange} onBlur={handleSumbit} onKeyDown={handleKeyDown}></input>
        </li>
    )
}