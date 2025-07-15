import { Plus, Equal } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center gap-6 md:gap-10 justify-center border-b-2 border-b-blue-50 w-full p-5">
      <img
        src="/go.png"
        className="w-8 md:w-12 lg:w-16 xl:w-20 max-w-[150px]"
      />
      <Plus className="w-6 h-6 md:w-6 md:h-6 lg:w-10 lg:h-10" />
      <img
        src="/react.png"
        className="w-8 md:w-12 lg:w-16 xl:w-20 max-w-[150px]"
      />
      <Equal className="w-6 h-6 md:w-6 md:h-6 lg:w-10 lg:h-10" />
      <img
        src="/go_final.png"
        className="w-8 md:w-12 lg:w-16 xl:w-20 max-w-[150px]"
      />
    </div>
  );
}
