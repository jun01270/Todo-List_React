import React from "react";

function Counter() {
  const increase = () => {
    console.log("+1");
  };
  const decrease = () => {
    console.log("-1");
  };

  return (
    <div>
      <h1>0</h1>
      <button>+1</button>
      <button>-1</button>
    </div>
  );
}

export default Counter;
