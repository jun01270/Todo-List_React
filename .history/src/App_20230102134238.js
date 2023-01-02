import "./App.css";
import Counter from "./counter";
import Todo from "./todo";

function App() {
  const handleEvent = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="todo">
      <Todo />
    </div>
  );
}

export default App;
