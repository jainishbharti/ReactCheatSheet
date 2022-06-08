import React, { useEffect, useState } from "react";

function EffectHookCounter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("UseEffect - Updating document title");
    document.title = `${name} clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click | Count {count}</button>
    </div>
  );
}

export default EffectHookCounter;
