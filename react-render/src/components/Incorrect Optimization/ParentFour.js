import React, { useState, useMemo, useCallback } from "react";
import { MemoizedChildFive } from "./ChildFive";  
import { MemoizedChildThree } from "./ChildThree";

export const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Vishwas");

  const person = {
      fname: 'Bruce',
      laname: 'Wayne'
  }

  const memoizedPerson = useMemo(() => person, [])

  const handleClick = () => {

  }

  const memoizedHandleClick = useCallback(handleClick,[])

  console.log("ParentFour Render");

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Tyrantt")}>Change Name</button>
      {/* <MemoizedChildThree name={name}>
          Don't use memo with child components if grand child components has children. it creates unnecessary renders
          <strong>Hello</strong> 
      </MemoizedChildThree> */}
      <MemoizedChildFive name={name} person={memoizedPerson} handleClick={memoizedHandleClick} />
    </div>
  );
};

