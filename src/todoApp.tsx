import { useEffect, useState } from "react";

import InputTodo from "./components/inputTodo";
import TodoMenu from "./components/todoMenu";

import type { TodoType } from "./types/todoType";
import TodoCompleted from "./components/todoCompleted";

export default function TodoApp() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/todos`)
      .then((res) => res.json())
      .then((data: TodoType[]) => setTodos(data));
  }, []);

  return (
    <div className="py-4 flex flex-col gap-5">
      <h1 className="text-center text-xl md:text-3xl lg:text-4xl uppercase">
        The best to do:
      </h1>
      <div className="flex flex-col gap-4">
        <InputTodo setTodos={setTodos} />
        <TodoMenu todos={todos} setTodos={setTodos} />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-center text-md md:text-lg lg:text-xl uppercase">
          Completed:
        </h2>
        <TodoCompleted todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
