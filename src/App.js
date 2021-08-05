import Todo from "./components/Todo";
import Button from "./components/Button";

function App() {
  const todos = [
    { id: 1, title: "wash dishes", completed: false },
    { id: 2, title: "make dinner", completed: true },
  ];
  return (
    <div className="App">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
      <Button label="Click me" />
    </div>
  );
}

export default App;
