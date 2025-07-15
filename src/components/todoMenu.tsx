import type { TodoType } from "@/types/todoType";
import ToDoItem from "./todoItem";
import type { SetStateAction } from "react";

export default function TodoMenu({
  todos,
  setTodos,
}: {
  todos: TodoType[];
  setTodos: React.Dispatch<SetStateAction<TodoType[]>>;
}) {
  return (
    <>
      {todos && todos.length > 0 ? (
        <div className="flex flex-col gap-4">
          {todos.map((todo, index) => {
            if (!todo.completed) {
              return <ToDoItem key={index} todo={todo} setTodos={setTodos} />;
            }
          })}
        </div>
      ) : (
        <div>there are no todos</div>
      )}
    </>
  );
}
