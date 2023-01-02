import "./App.css";

function App() {
  return (
    <div className="todo">
      <div className="todo-list">
        <p className="todo-title">ToDo List Page</p>
        <form className="todo-Form">
          <input type="text" placeholder="해야하는 일을 입력하세요"></input>
          <input type="button" value="입력" className="btn"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
