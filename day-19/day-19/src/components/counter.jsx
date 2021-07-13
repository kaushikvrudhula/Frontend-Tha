import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div
        className="Flipdown"
        onClick={() => this.setState({ count: this.state.count + 1 })}
      >
        {this.state.count}
      </div>
    );
  }
}
export default Counter;
