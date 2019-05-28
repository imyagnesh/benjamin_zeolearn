import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class todoListItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      update: false,
      updateText: props.todo.text,
    };
  }

  onUpdateText = e => {
    this.setState({ updateText: e.target.value });
  };

  updateTodo = () => {
    const { onUpdate, todo } = this.props;
    const { updateText } = this.state;
    onUpdate({ ...todo, text: updateText });
    this.setState({ update: false });
  };

  render() {
    const { todo, onDelete, onComplete } = this.props;
    const { update, updateText } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          margin: 10,
          padding: 10,
          backgroundColor: 'red',
          justifyContent: 'center',
        }}
      >
        <input
          style={{ marginRight: 10 }}
          type="checkbox"
          name="todoStatus"
          onClick={() => onComplete(todo)}
        />
        {update ? (
          <div style={{ display: 'flex', flex: 1, marginLeft: 10, marginRight: 10 }}>
            <input
              style={{ flex: 1 }}
              type="text"
              value={updateText}
              onChange={this.onUpdateText}
            />
            <button type="button" onClick={this.updateTodo}>
              Confirm
            </button>
          </div>
        ) : (
          <span style={{ flex: 1, textDecoration: todo.isDone ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
        )}
        <button
          style={{ marginRight: 10 }}
          type="button"
          onClick={() => this.setState({ update: true })}
        >
          Update
        </button>
        <button type="button" onClick={() => onDelete(todo)}>
          Delete
        </button>
      </div>
    );
  }
}
