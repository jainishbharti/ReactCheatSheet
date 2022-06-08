import React, { useState } from "react";
import useInput from "./hooks/useInput";

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>FirstName</label>
        <input type="text" {...bindFirstName} />
        <label>LastName</label>
        <input type="text" {...bindLastName} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
