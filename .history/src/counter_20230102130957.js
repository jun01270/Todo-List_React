/* eslint-disable */

import React, { useState } from "react";

function Counter() {
  let [num, numPlus] = useState(0);

  let increase = () => {
    console.log("+1");
    numPlus(num + 1);
  };
  let decrease = () => {
    console.log("-1");
    numPlus(num - 1);
  };

  let set = () => {
    console.log("-1");
    numPlus(0);
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <button onClick={set}>초기화</button>
    </div>
  );
}

export default Counter;
