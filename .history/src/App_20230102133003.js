import "./App.css";
import Counter from "./counter";

function App() {
  const handleEvent = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="todo">
      <Todo />
      <Counter />
    </div>
  );
}

export default App;
