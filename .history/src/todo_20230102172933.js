import { useState } from "react";
import "./App.css";

function Todo() {
    const [inputValue, setInputValue] = useState("");
    const [todoItems, setTodoItems] = useState([]);
  const handleInput = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const



  return (
    <div id="todo">
      <h1>투 두 리스트</h1>
      <div>
        <input
          type="text"
          placeholder="할 일을 입력하시오"
          onChange={handleInput}
        ></input>
        <button>입력</button>
      </div>
      <div className="todo-items">
        <ul>할 일 목록</ul>
      </div>
    </div>
  );
}

export default Todo;
