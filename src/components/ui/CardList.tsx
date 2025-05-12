import quantum from "@/assets/Quantum Relic.svg";
import rusty from "@/assets/Rusty Data Fragments.svg";
import codex from "@/assets/Encrypted Codex.svg";

interface NftItem {
  id: number;
  name: string;
  image: string;
}

const nft: NftItem[] = [
  {
    id: 1,
    name: "Quantum Relic (rare)",
    image: quantum,
  },
  {
    id: 2,
    name: "Rusty Data Fragments (common)",
    image: rusty,
  },
  {
    id: 3,
    name: "Encrypted Codex (uncommon)",
    image: codex,
  },
];

export default function CardList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {nft.map((item) => (
        <div
          key={item.id}
          className="bg-white w-full h-[350px] rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
          <div className="w-full h-80 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-4 flex items-center justify-center">
            <h3 className="font-semibold text-center text-lg">{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
