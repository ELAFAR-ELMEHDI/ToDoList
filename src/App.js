import React, { Component } from "react";
import ToDoList from "./ToDoList/ToDoList.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    );
  }
}

export default App;
