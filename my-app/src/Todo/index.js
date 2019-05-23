import React, { Component } from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoStatus from './todoStatus';

class index extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoForm text="title" />
        <TodoList />
        <TodoStatus />
      </div>
    );
  }
}

index.protoTypes = {};

index.defaultProps = {};

export default index;
