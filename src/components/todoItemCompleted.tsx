import type { SetStateAction } from "react";
import type { TodoType } from "@/types/todoType";

import { Button } from "./ui/button";

import { Trash, X } from "lucide-react";

export default function ToDoItemCompleted({
  todo,
  setTodos,
}: {
  todo: TodoType;
  setTodos: React.Dispatch<SetStateAction<TodoType[]>>;
}) {
  function deleteTodo(id: string) {
    fetch(`${process.env.VITE_BACKEND_URL}/api/todos/${id}`, {
      method: "DELETE",
    }).then(() => setTodos((prev) => prev.filter((todo) => todo.id != id)));
  }

  function completeTodo(id: string) {
    fetch(`${process.env.VITE_BACKEND_URL}/api/todos/${id}`, {
      method: "PUT",
    }).then(() => {
      todo.completed = false;
      setTodos((prev) => [...prev]);
    });
  }

  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <div className="flex items-center flex-wrap py-1 px-3 rounded-lg border border-neutral-200 text-neutral-200 text-sm w-full">
        <p className="text-wrap wrap-anywhere">{todo.body}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          className="flex-1 bg-red-700 hover:bg-red-500 cursor-pointer"
          onClick={() => deleteTodo(todo.id)}
        >
          <Trash />
        </Button>
        <Button
          className="flex-1 bg-yellow-700 hover:bg-yellow-500 cursor-pointer"
          onClick={() => completeTodo(todo.id)}
        >
          <X />
        </Button>
      </div>
    </div>
  );
}
