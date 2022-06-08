import React from "react";
import "./myStyles.css"

function Stylesheets(props) {
    let className = props.primary ? 'primary' : 'secondary'
  return (
    <div>
      <h1 className={`font-xl ${className}`}>Stylesheets</h1>
    </div>
  );
}

export default Stylesheets;
