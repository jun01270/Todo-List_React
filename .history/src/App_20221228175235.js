import "./App.css";
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet">

function App() {
  return (
    <div className="todo">
      <div className="todo-list">
        <p className="todo-title">투두 리스트임</p>
        <form className="todo-Form">
          <input type="text" placeholder="해야하는 일을 입력하세요"></input>
          <input type="button" value="입력" className="btn"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
