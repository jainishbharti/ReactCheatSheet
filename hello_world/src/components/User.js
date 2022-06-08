import React, { Component } from 'react'

class Vishwas extends Component {

  render() {
    return (
      <div>
          <h4>{this.props.render(true)}</h4>
      </div>
    )
  }
}

export default Vishwas