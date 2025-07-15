import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";

import type { SubmitHandler } from "react-hook-form";
import type React from "react";
import type { SetStateAction } from "react";

import type { TodoType } from "@/types/todoType";

type Inputs = {
  todo: string;
};

export default function InputTodo({
  setTodos,
}: {
  setTodos: React.Dispatch<SetStateAction<TodoType[]>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    var body = {
      body: data.todo,
    };

    fetch("http://localhost:8080/api/todos", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data: TodoType) => setTodos((prev) => [...prev, data]));

    reset({ todo: "" });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Input
            {...register("todo", { required: true })}
            placeholder="Enter what to do"
          />
          <Button type="submit" variant={"secondary"}>
            Submit
          </Button>
        </div>
        <div>{errors.todo && <span>To do can not be empty</span>}</div>
      </form>
    </>
  );
}
