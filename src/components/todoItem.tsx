import { Trash, Check } from "lucide-react";
import { Button } from "./ui/button";
import type { TodoType } from "@/types/todoType";
import type { SetStateAction } from "react";

export default function ToDoItem({
  todo,
  setTodos,
}: {
  todo: TodoType;
  setTodos: React.Dispatch<SetStateAction<TodoType[]>>;
}) {
  function deleteTodo(id: string) {
    fetch(`http://localhost:8080/api/todos/${id}`, {
      method: "DELETE",
    }).then(() => setTodos((prev) => prev.filter((todo) => todo.id != id)));
  }

  function completeTodo(id: string) {
    fetch(`http://localhost:8080/api/todos/${id}`, {
      method: "PUT",
    }).then(() => {
      todo.completed = true;
      setTodos((prev) => [...prev]);
    });
  }

  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <div className="py-1 px-3 rounded-lg bg-neutral-200 text-neutral-900 text-sm w-full flex items-center flex-wrap">
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
          className="flex-1 bg-green-700 hover:bg-green-500 cursor-pointer"
          onClick={() => completeTodo(todo.id)}
        >
          <Check />
        </Button>
      </div>
    </div>
  );
}
