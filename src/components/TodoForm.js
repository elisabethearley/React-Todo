import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ""
        };
    }

    handleChanges = e => {
        console.log(e.target.value);
        this.setState({ todo: e.target.value });
    };
    
    submitTodo = e => {
        e.preventDefault();
        this.props.addTodo(e, this.state.todo); 
        this.setState({ todo: ""});
    }

    render() {
        return (
            <form onSubmit={this.submitTodo}> 
                <input 
                    type="text"
                    value={this.state.todo}
                    name="todo"
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;