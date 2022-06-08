import React, { useState } from "react";
import { MemoizedChildFour } from "./ChildFour";
import { MemoizedChildThree } from "./ChildThree";

export const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Vishwas");

  console.log("ParentThree Render");

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Tyrantt")}>Change Name</button>
      {/* <MemoizedChildThree name={name}>
          Don't use memo with child components if grand child components has children. it creates unnecessary renders
          <strong>Hello</strong> 
      </MemoizedChildThree> */}
      <MemoizedChildFour name={name}/>
    </div>
  );
};
