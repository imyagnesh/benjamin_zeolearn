import React, { Component } from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoStatus from './todoStatus';

class index extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    todoText: '',
    todos: [],
    status: 'all',
  };

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async () => {
    const res = await fetch('http://localhost:3004/todo');
    const todos = await res.json();
    this.setState({ todos });
  };

  onChange = event => {
    this.setState({ todoText: event.target.value });
  };

  addTodo = async e => {
    e.preventDefault();
    const { todoText, todos } = this.state;
    const newTodo = { text: todoText, isDone: false };
    const res = await fetch('http://localhost:3004/todo', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const todo = await res.json();
    this.setState({
      todos: [todo, ...todos],
      todoText: '',
      status: 'all',
    });
  };

  onDelete = async todo => {
    const { todos } = this.state;
    await fetch(`http://localhost:3004/todo/${todo.id}`, {
      method: 'DELETE',
    });
    this.setState({
      todos: todos.filter(x => x.id !== todo.id),
    });
  };

  onComplete = async todo => {
    const { todos } = this.state;
    const i = todos.findIndex(x => x.id === todo.id);

    const updatedTodo = { ...todo, isDone: !todo.isDone };

    const res = await fetch(`http://localhost:3004/todo/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedTodo),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const newTodo = await res.json();

    const updatedTodos = [...todos.slice(0, i), newTodo, ...todos.slice(i + 1)];
    this.setState({ todos: updatedTodos });
  };

  onUpdate = todo => {
    const { todos } = this.state;
    const i = todos.findIndex(x => x.id === todo.id);
    const updatedTodos = [...todos.slice(0, i), todo, ...todos.slice(i + 1)];
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todoText, todos, status } = this.state;
    let filteredTodos = todos;
    if (status === 'pending') {
      filteredTodos = todos.filter(x => x.isDone === false);
    }
    if (status === 'completed') {
      filteredTodos = todos.filter(x => x.isDone === true);
    }

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2>Todo App</h2>
        <TodoForm value={todoText} onChange={this.onChange} addTodo={this.addTodo} />
        <div style={{ flex: 1, width: '100%' }}>
          <TodoList
            todos={filteredTodos}
            onDelete={this.onDelete}
            onComplete={this.onComplete}
            onUpdate={this.onUpdate}
          />
        </div>
        <div style={{ width: '100%', display: 'flex' }}>
          <TodoStatus onStatusChange={sts => this.setState({ status: sts })} />
        </div>
      </div>
    );
  }
}

index.protoTypes = {};

index.defaultProps = {};

export default index;
