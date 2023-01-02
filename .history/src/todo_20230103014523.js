import { useState } from "react";
import "./App.css";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [keyValue, keyState] = useState(0);
  const [key, inputkey] = useState([]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleTodo = (e) => {
    setTodoItems([...todoItems, inputValue]);
    inputkey([...key, keyValue]);
  };

  const deleteTodo = () => {
    setTodoItems([]);
  };

  const increase = () => {
    keyState(keyValue + 1);
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
        <button onClick={deleteTodo}>삭제</button>
      </div>
      <div className="todo-items">
        <ul>할 일 목록</ul>
        {todoItems.map((todos) => (
          <div id={keyValue}>{todos}</div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
