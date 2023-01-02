import { useState } from "react";
import "./App.css";

function Todo() {
  const handleEvent = (event) => {
    setInputValue(event.target.value);
  };

  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    setTodoList([...todoList, inputValue]);
    console.log(todoList);
  };

  return (
    <div id="todo">
      <h1 className="todo-title">투두 리스트</h1>
      <div className="todo-form">
        <div className="todo-input">
          <input
            type="text"
            placeholder="해야하는 일을 입력하세요"
            onChange={handleEvent}
            value={inputValue}
          ></input>
          <button onClick={addTodo}>입력</button>
        </div>
        <div className="todo-items">
          <span className="todo">{todoList}</span>
        </div>
      </div>
    </div>
  );
}

export default Todo;
