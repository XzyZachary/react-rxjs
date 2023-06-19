import { NavLink } from "react-router-dom";

export default function TodoFooter({ remainingCount, hasCompleted, onClearCompletedClick }) {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{remainingCount}</strong>
                item{remainingCount > 1 ? 's' : ''}
            </span>
            <ul className="filters">
                <li>
                    <NavLink to="/" exact="true" activeclassname="selected">All</NavLink>
                </li>
                <li>
                    <NavLink to="/active" exact="true" activeclassname="selected">Active</NavLink>
                </li>
                <li>
                    <NavLink to="/completed" exact="true" activeclassname="selected">Completed</NavLink>
                </li>
            </ul>
            { hasCompleted && (
                <button className="clear-completed" onClick={onClearCompletedClick}>clear completed</button>
            )}
        </footer>
    )
}