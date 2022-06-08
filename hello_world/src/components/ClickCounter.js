import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {

  // This is now coming from HOC
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }

  // incrementCount = () => {
  //   this.setState((prevState) => {
  //       return {count: prevState.count + 1}
  //   });
  // };

  render() {
      const {count, incrementCount, name } = this.props
    return (
      <div>
        <button onClick={incrementCount}>{name} Clicked {count} Times</button>
      </div>
    );
  }
}

export default withCounter(ClickCounter,2);
