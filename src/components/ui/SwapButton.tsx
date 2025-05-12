import { RefreshCw } from "lucide-react";

export default function SwapButton() {
  return (
    <div className="relative w-full flex justify-center items-center -my-4 z-10">
      <button className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-600 bg-transparent hover:bg-[#1b1b1b] transition-all duration-200 shadow-lg">
        <RefreshCw className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}
