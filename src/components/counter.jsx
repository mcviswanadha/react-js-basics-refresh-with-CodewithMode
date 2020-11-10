import React, { Component } from "react";
import "../style.css";

class Counter extends Component {
  state = {
    count: 0
  };

  getBadge() {
    let classes = "badge-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  }

  getIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  formatCount() {
    console.log();
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  render() {
    return (
      <div>
        <span className={this.getBadge()}>{this.state.count}</span>
        <button onClick={() => this.getIncrement()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
