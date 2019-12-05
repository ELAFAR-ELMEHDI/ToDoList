import React, { Component } from "react";
import ToDoList from "./ToDoList/ToDoList.js";
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>
          <ToDoList />
        </h1>
      </div>
    );
  }
}

export default App;
