import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // Part of Approach 3 - Binding the method in clas  constructor
    // this.clickHandler = this.clickHandler.bind(this);
  }

  // Approach 4 - Change the helper method to an arrow function itself
  clickHandler = () => {
    this.setState({message: "GoodBye!"});
    console.log(this);
    
  }

  // clickHandler() {
  //   this.setState({ message: "GoodBye!" });
  //   console.log(this);
  // }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Approach1 for binding method using bind()
          <button onClick={this.clickHandler.bind(this)}>Click</button> */}

          {/* Approach2 - Using arrow function */}
          {/* <button onClick={() => this.clickHandler()}>Click</button>  */}

          {/* Approach3 - Binding the clickHandler in constructor */}
          <button onClick={this.clickHandler}>Click</button> 
      </div>
    );
  }
}

export default EventBind;
