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

  onChange = event => {
    this.setState({ todoText: event.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    const { todoText, todos } = this.state;
    this.setState({
      todos: [{ id: todos.length, text: todoText, isDone: false }, ...todos],
      todoText: '',
      status: 'all',
    });
  };

  onDelete = todo => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(x => x.id !== todo.id),
    });
  };

  onComplete = todo => {
    const { todos } = this.state;
    const i = todos.findIndex(x => x.id === todo.id);
    const updatedTodos = [
      ...todos.slice(0, i),
      { ...todo, isDone: !todo.isDone },
      ...todos.slice(i + 1),
    ];
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
