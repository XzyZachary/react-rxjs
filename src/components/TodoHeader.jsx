import { useRef } from "react";


export default function TodoHeader(props) {
    const inputRef = useRef(null)

    const ENTER_KEY = 13;

    const addTodo = (event) => {
        if (event.keyCode !== ENTER_KEY) return;
        event.preventDefault();
        const title = event.target.value.trim();
        if (title) {
            props.onKeyDown(title)
            inputRef.value = '';
        }
    }
    return (
        <header>
            <h1>Todos</h1>
            <input type="text" className="new-todo" placeholder="What needs to be done?" ref={inputRef}  onKeyDown={addTodo}/>
        </header>
    )
}