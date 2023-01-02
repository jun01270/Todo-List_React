import { useState } from "react";
import "./App.css";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleTodo = () => {
    setTodoItems([...todoItems, inputValue]);
    const newTodoItems = [...todoItems];
    console.log(newTodoItems);
    console.log(inputValue);
  };

  return (
    <div id="todo">
      <h1>투 두 리스트</h1>
      <div>
        <input
          type="text"
          placeholder="할 일을 입력하시오"
          onChange={handleInput}
          value={inputValue}
        ></input>
        <button onClick={handleTodo}>입력</button>
      </div>
      <div className="todo-items">
        <ul>할 일 목록</ul>
      </div>
    </div>
  );
}

export default Todo;
