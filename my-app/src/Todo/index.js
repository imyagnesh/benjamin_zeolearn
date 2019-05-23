import React, { Component } from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoStatus from './todoStatus';

class index extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
        <TodoStatus />
      </div>
    );
  }
}

export default index;
