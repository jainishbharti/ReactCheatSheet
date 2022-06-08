import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    //Ternary Conditional Approach
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Vishwas</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // Short-circuit operator approach
    return this.state.isLoggedIn && <div>Welcome Vishwas</div>

    // Element variable approach
    // let message;
    // if (this.state.isLoggedIn) message = <div>Welcome Vishwas</div>;
    // else message = <div>Welcome Guest</div>;

    // return <>{message}</>;

    // Conditional Rendering
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Vishwas</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // Regular rendering
    // return (
    //     <>
    //         <div>Welcome Vishwas</div>
    //         <div>Welcome Guest</div>
    //     </>
    // )
  }
}

export default UserGreeting;
