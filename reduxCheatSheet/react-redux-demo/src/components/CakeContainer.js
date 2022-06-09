import React, {useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

const CakeContainer = (props) => {
  const [qty, setQty] = useState(1)
  return (
    <div>
        <h2>Number of Cakes : {props.numOfCakes}</h2>
        <input type="text" value={qty} onChange={e => setQty(e.target.value)} />
        <button onClick={() => props.buyCake(qty)}>Buy {qty} Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake : (qty) => dispatch(buyCake(qty))
  }
}
const enhancedComponent = connect(mapStateToProps, mapDispatchToProps)

// const enhancedComponent = connect(mapStateToProps, { buyCake })

export const WrappedComponent = enhancedComponent(CakeContainer)
