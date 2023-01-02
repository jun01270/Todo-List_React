import { useState } from "react";
import "./App.css";

function Todo() {
  const handleInput = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const [inputValue, setInputValue] = useState("");
  return (
    <div id="todo">
      <h1>투 두 리스트</h1>
      <div>
        <input type="text" placeholder="할 일을 입력하시오"></input>
        <button>입력</button>
      </div>
      <div className="todo-items">
        <ul>할 일 목록</ul>
      </div>
    </div>
  );
}

export default Todo;
