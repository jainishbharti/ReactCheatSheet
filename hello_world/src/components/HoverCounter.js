import React, { Component } from 'react';
import withCounter from "./withCounter";


class HoverCounter extends Component {

    // This is now coming from HOC
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       count: 0,
    //     };
    //   }
    //   incrementCount = () => {
    //     this.setState((prevState) => {
    //         return {count: prevState.count + 1}
    //     });
    //   };
    
  render() {
    const {count, incrementCount, name } = this.props
    return (
      <div>
          <h2 onMouseOver={incrementCount}>{name} Hovered {count} times</h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter,5)