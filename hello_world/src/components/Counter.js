import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  //   handleIncrement = () => {
  //     this.setState({ count: this.state.count + 1 }, () => {
  //       console.log("Callback value", this.state.count);
  //     });
  //   };

  handleIncrement = () => {
    this.setState((prevState, props) => ({ count: prevState.count + 1 }));
  };

  handleIncrementFive = () => {
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
  };

  handleDecrement = () => {
    if (this.state.count > 0)
      this.setState({ count: this.state.count - 1 }, () => {
        console.log("Callback value", this.state.count);
      });
  };
  render() {
    return (
      <>
        <h2>Count - {this.state.count}</h2>
        <button onClick={() => this.handleIncrementFive()}>Increment</button>
        <button onClick={() => this.handleDecrement()}>Decrement</button>
      </>
    );
  }
}

export default Counter;
