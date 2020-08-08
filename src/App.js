import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

//import "./components/Todo.css";

const tasks = 
  [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks // same as === tasks: tasks
    };
  }

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTodo]
    });
  };

  toggleTodo = todoId => {
    console.log(todoId);
      // map over array
      // when we find item we clicked, toggle completed, otherwise return todo to incompleted.
    this.setState({                           // 'this' scoped to App
      tasks: this.state.tasks.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,                          // refers to entire single item of array
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    // if item is purchased (item.purchased is true) then filter out
    this.setState({
      tasks: this.state.tasks.filter(todo => !todo.completed)
    });
  };
  
  render() {
    console.log("rendering... ");
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
