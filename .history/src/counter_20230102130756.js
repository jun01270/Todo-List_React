/* eslint-disable */

import React, { useState } from "react";

function Counter() {
  let [num, numPlus] = useState(0);

  let increase = () => {
    console.log("+1");
    numPlus(num + 1);
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
