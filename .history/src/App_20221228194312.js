import "./App.css";

function App() {
  return (
    <div className="todo">
      <div className="todo-list">
        <p className="todo-title">투두 리스트</p>
        <div>
          <form className="todo-Form">
            <input type="text" placeholder="해야하는 일을 입력하세요"></input>
            <input type="submit" value="입력" className="sub"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
