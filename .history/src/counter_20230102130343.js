/* eslint-disable */

import React, { useState } from "react";

function Counter() {
  let [num, numPlus] = useState(num);

  const increase = () => {
    console.log("+1");
    console.log(num);
  };
  const decrease = () => {
    console.log("-1");
  };

  return (
    <div>
      <h1>0</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
}

export default Counter;
