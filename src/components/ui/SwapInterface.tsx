import { useState } from "react";
import SwapButton from "./SwapButton";
import Button from "@/components/ui/button";

export default function SwapInterface() {
  const [fromAmount, setFromAmount] = useState("");
  const [isSwapped, setIsSwapped] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState("");

  const nftOptions = [
    { id: "nft-1", name: "TORA NFT #001" },
    { id: "nft-2", name: "TORA NFT #002" },
    { id: "nft-3", name: "TORA NFT #003" },
  ];

  const handleSwap = () => {
    setIsSwapped(!isSwapped);
    setFromAmount("");
    setSelectedNFT("");
  };

  const parsedAmount = parseFloat(fromAmount) || 0;
  const toAmount = isSwapped
    ? parsedAmount >= 1
      ? (parsedAmount * 500).toFixed(0) + " TORA"
      : "0 TORA"
    : parsedAmount >= 500
    ? Math.floor(parsedAmount / 500) + " NFT"
    : "0 NFT";

  const handleUseOneNFT = () => {
    setFromAmount("1");
  };

  return (
    <div className="border border-gray-600 text-white max-w-md mx-auto p-4 rounded-xl shadow-xl">
      <div className="flex flex-col gap-3">
        {/* From */}
        <div className="p-4 rounded-xl border border-gray-600 bg-transparent">
          <div className="text-sm text-white">From</div>
          <div className="flex items-center justify-between">
            <div className="font-semibold text-white">
              {isSwapped ? "TORA NFT" : "TORA"}
            </div>
            {!isSwapped ? (
              <input
                type="number"
                min="0"
                className="bg-transparent text-right w-24 outline-none"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                placeholder="0"
              />
            ) : (
              <select
                value={selectedNFT}
                onChange={(e) => {
                  setSelectedNFT(e.target.value);
                  setFromAmount("1");
                }}
                className="bg-transparent border border-gray-500 rounded-md px-2 py-1 text-white"
              >
                <option value="" disabled>
                  Choose NFT
                </option>
                {nftOptions.map((nft) => (
                  <option key={nft.id} value={nft.id} className="text-black">
                    {nft.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Tambah tombol Gunakan 1 NFT */}
          {isSwapped && (
            <div className="mt-2">
              <button
                onClick={handleUseOneNFT}
                className="text-xs text-white"
              >
                Use 1 TORA NFT
              </button>
            </div>
          )}
        </div>

        {/* Swap Button */}
        <div onClick={handleSwap}>
          <SwapButton />
        </div>

        {/* To */}
        <div className="p-4 rounded-xl border border-gray-600 bg-transparent">
          <div className="text-sm text-white">To</div>
          <div className="flex items-center justify-between">
            <div className="font-semibold">
              {isSwapped ? "TORA" : "TORA NFT"}
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
