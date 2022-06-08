import React, { useState } from "react";

const initState = ["Bruce", "Wayne"];

export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initState);

  const handleClick = () => {
    // persons.push('Clark');
    // persons.push('Kent');
    const newArr = [...persons];
    newArr.push("Clark");
    newArr.push("Kent");
    setPersons(newArr);
  };
  console.log("ArrayUseState Render");

  return (
    <>
      <button onClick={handleClick}>Click</button>
      {persons.map((person, index) => (
        <div key={index}>{person}</div>
      ))}
    </>
  );
};
