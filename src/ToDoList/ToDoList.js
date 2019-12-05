import React, { Component } from "react";

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      Input: "",
      todo: []
    };
  }
  onchange(event) {
    this.setState({
      Input: event.target.value
    });
  }
  addItem(event) {
    event.preventDefault();
    this.setState({
      Input: "",
      todo: [...this.state.todo, this.state.Input]
    });
  }
  deleteItem(event) {
    event.preventDefault();
    const arr = this.state.todo;
    const index = arr.indexOf(event.target.value);
    arr.splice(index, 1);
    this.setState({
      todo: arr
    });
  }
  renderList() {
    return this.state.todo.map(item => {
      return (
        <div key={item}>
          {item} | <button onClick={this.deleteItem.bind(this)}>X</button>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h1>to do list</h1>
        <form>
          <input
            value={this.state.Input}
            type="text"
            placeholder="add item"
            onChange={this.onchange.bind(this)}
          />
          <button onClick={this.addItem.bind(this)}>addToList</button>
        </form>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}
export default ToDoList;
