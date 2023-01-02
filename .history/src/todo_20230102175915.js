import { useState } from "react";
import "./App.css";

function Todo() {
  const PracticeTodoList = () => {
    const [textValue, setTextValue] = useState("");
    const [enters, setEnters] = useState([]);

    const onChange = (e) => {
      setTextValue(e.target.value);
    };

    const onCreate = (e) => {
      setEnters((enters) => [...enters, textValue]);
      setTextValue("");
    };

    return (
      <div>
        <h1 className="title">TodoList</h1>
        <input
          name="textValue"
          value={textValue}
          onChange={onChange}
          placeholder="할 일을 입력하세요."
        />
        <button onClick={onCreate} className="todoBtn">
          등록하기
        </button>
        <br />
        <b>
          값:
          {enters.map((ent) => (
            <div>{ent} </div>
          ))}
        </b>
      </div>
    );
  };
}

export default Todo;
