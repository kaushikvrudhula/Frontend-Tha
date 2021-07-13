import "./App.css";
import "./components/counter";
import React, { Component } from "react";
import Counter from "./components/counter";
class App extends Component {
  render() {
    return (
      <div className="container">
        <h6 className="title">Counter to define the state of components </h6>
        <main>
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </main>
      </div>
    );
  }
}
export default App;
