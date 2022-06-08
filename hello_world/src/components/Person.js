import React from "react";

function Person(props) {
  const {name, age, skill } = props.person;
  return (
    <div>
      <h2>
        I am {name}. I am {age} years old. I am skilled in
        {skill}
      </h2>
    </div>
  );
}

export default Person;
