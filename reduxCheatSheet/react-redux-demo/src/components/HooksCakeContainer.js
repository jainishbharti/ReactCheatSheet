import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/index";

export const HooksCakeContainer = () => {
  const [qty, setQty] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No of Cakes: {numOfCakes}</h2>
      <input type="text" value={qty} onChange={(e) => setQty(e.target.value)} />
      <button onClick={() => dispatch(buyCake(qty))}>Buy Cake</button>
    </div>
  );
};
