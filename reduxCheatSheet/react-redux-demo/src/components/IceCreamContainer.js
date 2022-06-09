import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

const IceCreamContainer = (props) => {
  return (
    <div>
        <h2>Number of IceCreams : {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream : () => dispatch(buyIceCream())
  }
}
const enhancedComponent = connect(mapStateToProps, mapDispatchToProps)

// const enhancedComponent = connect(mapStateToProps, { buyIceCream })

export const WrappedComponent = enhancedComponent(IceCreamContainer)
