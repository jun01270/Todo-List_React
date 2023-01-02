import { useState } from "react";
import "./App.css";

function Todo() {
  const handleEvent = (event) => {
    setinputValue(event.target.value);
  };

  const [inputValue, setinputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {};

  return (
    <div className="todo">
      <div className="todo-all">
        <p className="todo-title">투두 리스트</p>
        <div className="todo-list">
          <div className="todo-form">
            <input
              type="text"
              placeholder="해야하는 일을 입력하세요"
              onChange={handleEvent}
              value={inputValue}
            ></input>
            <button onClick={addTodo}>입력</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
