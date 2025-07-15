import InputTodo from "./components/inputTodo";
export default function TodoApp() {
  return (
    <div className="py-4 flex flex-col gap-5">
      <h1 className="text-center text-xl md:text-3xl lg:text-4xl uppercase">
        The best to do:
      </h1>
      <div>
        <InputTodo />
      </div>
    </div>
  );
}
