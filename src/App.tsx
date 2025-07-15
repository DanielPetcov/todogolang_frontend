import Header from "./components/header";
import TodoApp from "./todoApp";

function App() {
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
