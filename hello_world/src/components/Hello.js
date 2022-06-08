import React from "react";

// Returning JSX Element
// const Hello = () => {
//     return <div>
//         <h1>Hello Vishwas</h1>
//     </div>
// }

//Returning React Element
const Hello = () => {
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Vishwas")
  );
};

export default Hello;
