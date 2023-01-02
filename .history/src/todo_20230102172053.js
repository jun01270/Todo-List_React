import { useState } from "react";
import "./App.css";

function Todo() {
  return (
    <div id="todo">
      <h1>투 두 리스트</h1>
      <div>
        <input type="text" placeholder="할 일을 입력하시오"></input>
        <button>입력</button>
      </div>
      <div>
        <ul>할 일 목록들</ul>
      </div>
    </div>
  );
}

export default Todo;
