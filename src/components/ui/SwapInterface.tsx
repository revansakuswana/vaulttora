import { useState } from "react";
import SwapButton from "./SwapButton";
import Button from "@/components/ui/button";

export default function SwapInterface() {
  const [fromAmount, setFromAmount] = useState("");
  const [isSwapped, setIsSwapped] = useState(false);

  // Dummy conversion logic
  const handleSwap = () => {
    setIsSwapped(!isSwapped);
  };

  const parsedAmount = parseFloat(fromAmount) || 0;
  const toAmount = isSwapped
    ? parsedAmount >= 1
      ? (parsedAmount * 490).toFixed(0) + " TORA"
      : "0 TORA"
    : parsedAmount >= 500
    ? Math.floor(parsedAmount / 500) + " NFT"
    : "0 NFT";

  return (
    <div className="border border-gray-600 text-white max-w-md mx-auto p-4 rounded-xl shadow-xl">
      <div className="flex flex-col gap-3">
        {/* From */}
        <div className="p-4 rounded-xl border border-gray-600 bg-transparent">
          <div className="text-sm text-white">From</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div>
                <div className="font-semibold text-white">
                  {isSwapped ? "TORA NFT" : "TORA"}
                </div>
              </div>
            </div>
            <input
              type="number"
              min="0"
              className="bg-transparent text-right w-24 outline-none"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              placeholder="0"
            />
          </div>
        </div>

        {/* Swap Button */}
        <div onClick={handleSwap}>
          <SwapButton />
        </div>

        {/* To */}
        <div className="p-4 rounded-xl border border-gray-600 bg-transparent">
          <div className="text-sm text-white">To</div>
          <div className="flex items-center justify-between">
            <div className="flex items-left space-x-2">
              <div>
                <div className="font-semibold">
                  {isSwapped ? "TORA" : "TORA NFT"}
                </div>
              </div>
            </div>
            <div className="text-right">{toAmount}</div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="text-xs text-white my-4 text-center">
        1 TORA NFT = 500 TORA | Swap-back fee: 10 TORA
      </div>

      <Button className="flex justify-center py-4 text-2xl">Swap Now</Button>
    </div>
  );
}
