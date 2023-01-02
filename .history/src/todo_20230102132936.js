import "./App.css";

function todo() {
  const handleEvent = (event) => {
    console.log(event.target.value);
  };
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
            ></input>
          </div>
        </div>
      </div>
      <Counter />
    </div>
  );
}

export default Todo;
