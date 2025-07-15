import type { SetStateAction } from "react";

import type { TodoType } from "@/types/todoType";

import ToDoItemCompleted from "./todoItemCompleted";

export default function TodoCompleted({
  todos,
  setTodos,
}: {
  todos: TodoType[];
  setTodos: React.Dispatch<SetStateAction<TodoType[]>>;
}) {
  return (
    <>
      {todos && todos.length > 0 ? (
        <div className="flex flex-col gap-2">
          {todos.map((todo, index) => {
            if (todo.completed) {
              return (
                <ToDoItemCompleted
                  key={index}
                  todo={todo}
                  setTodos={setTodos}
                />
              );
            }
          })}
        </div>
      ) : null}
    </>
  );
}
