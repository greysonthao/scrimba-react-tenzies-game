import React from "react";

function Die(props) {
  return (
    <div className="die-dice">
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}

export default Die;
