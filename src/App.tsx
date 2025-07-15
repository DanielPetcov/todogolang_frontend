import { useEffect, useState } from "react";
import Header from "./components/header";
import TodoApp from "./todoApp";
type Todo = {
  id: string;
  completed: boolean;
  body: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodo();
  }, []);

  function fetchTodo() {
    fetch("http://localhost:8080/api/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }

  function deleteTodo(id: string) {
    fetch(`http://localhost:8080/api/todos/${id}`, {
      method: "DELETE",
    }).then(() => fetchTodo());
  }

  return (
    <div className="bg-sky-950 min-h-screen text-neutral-50">
      <Header />
      <div className="w-full px-4 max-w-[800px] xl:max-w-[1000px] 3xl:max-w-[1580px] mx-auto">
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
