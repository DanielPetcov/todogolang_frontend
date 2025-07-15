import Header from "./components/header";
import TodoApp from "./todoApp";

function App() {
  return (
    <div className="bg-sky-950 min-h-screen text-neutral-50 flex flex-col justify-between">
      <div className="w-full">
        <Header />
        <div className="w-full px-4 max-w-[800px] xl:max-w-[1000px] 3xl:max-w-[1580px] mx-auto">
          <TodoApp />
        </div>
      </div>
      <footer className="text-center text-xs p-2">
        Made by @danielpetcov. {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
