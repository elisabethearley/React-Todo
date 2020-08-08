// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = props => {

    return ( 
        <div className="todo-list">
            {props.tasks.map(todo => (
                <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo}  /> 
            ))}
            <button className="completed-btn" onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    );
};


export default TodoList;