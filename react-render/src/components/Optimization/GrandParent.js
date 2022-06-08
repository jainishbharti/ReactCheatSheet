import React, { useState } from "react";
import { ChildOne } from "./ChildOne";
import { ParentOne } from "./ParentOne";

export const GrandParent = () => {
  const [newCount, setNewCount] = useState(0);

  console.log("GrandParent Render");

  return (
    <div>
      <button onClick={() => setNewCount((nc) => nc + 1)}> GrandParent Count - {newCount}</button>
      <ParentOne newCount={newCount}>
          <ChildOne />
      </ParentOne>
    </div>
  );
};