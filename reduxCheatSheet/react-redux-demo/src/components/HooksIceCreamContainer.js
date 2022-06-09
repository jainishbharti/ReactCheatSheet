import React, { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux/index'

export const HooksIceCreamContainer = () => {
  const [qty, setQty] = useState(1);
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>No of Ice Creams: {numOfIceCreams}</h2>
        <input type="text" value={qty} onChange={e => setQty(e.target.value)} />
        <button onClick={() => dispatch(buyIceCream(qty))}>Buy Ice Cream</button>
    </div>
  )
}


