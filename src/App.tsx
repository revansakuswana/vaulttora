import "./App.css";
import SwapInterface from "./components/ui/SwapInterface";
import CardList from "./components/ui/CardList";
import Button from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import maskot from "@/assets/maskot.svg";
import { FaEarlybirds, FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { LuRadical } from "react-icons/lu";

function App() {
  return (
    <>
      <div className="flex flex-row justify-end px-6 pt-6">
        <Button className="flex">
          <LuRadical className="mr-1" />
          Connect
        </Button>
      </div>
      <div className="min-h-screen flex flex-col text-black">
        <div className="flex flex-col items-center text-center text-white">
          <img src={logo} alt="Max The Pug" className="w-64 rounded-full" />
          <h1 className="text-4xl mb-4">VaultTora</h1>
          <h4 className="mb-4">Hunt the Rare. Keep the Value.</h4>

          <div className="flex gap-4 justify-center">
            <SocialButton icon={<FaTelegramPlane className="text-2xl" />} />
            <SocialButton icon={<FaXTwitter className="text-2xl" />} />
            <SocialButton icon={<FaEarlybirds className="text-2xl" />} />
          </div>
        </div>

        <div className="flex flex-row justify-end mx-8 my-6 rotate-30">
          <div className="flex flex-col gap-4">
            <img src={maskot} className="w-28" alt="maskot" />
            <Button>Buy Now</Button>
          </div>
        </div>

        <section className="relative text-white px-4 text-center font-comic bg-black clip-hexagon-vertical h-[2300px]">
          <div className="relative z-10 my-18 max-w-3xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">About VaultTora</h2>
              <p className="mb-4">
                VaultTora is a simple yet powerful platform that lets users swap
                500 $TORA tokens for a random NFT—common, uncommon, or rare. If
                you don&apos;t like what you get, no worries—you can swap the
                NFT back for tokens anytime. There&apos;s a small 10 $TORA fee
                per NFT swap-back, and that fee gets burned forever, making the
                token supply more scarce over time.
              </p>
              <p className="mb-4">
                It&apos;s a fun, risk-free way to chase rare NFTs while keeping
                your value intact. You can trade your NFTs on the marketplace or
                hold onto them for future perks as the VaultTora ecosystem
                grows.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6">How to Swap</h2>
              <p className="mb-4">
                VaultTora is a simple yet powerful platform that lets users swap
                500 $TORA tokens for a random NFT—common, uncommon, or rare. If
                you don&apos;t like what you get, no worries—you can swap the
                NFT back for tokens anytime. There&apos;s a small 10 $TORA fee
                per NFT swap-back, and that fee gets burned forever, making the
                token supply more scarce over time.
              </p>
              <p className="mb-4">1. Swap $TORA to NFT:</p>
              <p className="mb-4">
                Spend 500 $TORA to receive one random NFT. The rarity is
                determined instantly based on fixed probabilities: Common – 80%
                chance Uncommon – 17% chance Rare – 3% chance
              </p>
              <p className="mb-4">2. Swap NFT back to $TORA:</p>
              <p className="mb-4">
                Don’t like what you got? You can swap any NFT back and receive
                490 $TORA—a flat 10 $TORA fee applies, and that fee is burned
                permanently. This makes $TORA scarcer and potentially more
                valuable over time.
                <br />
                Each swap is a chance-based roll, but you never truly lose—your
                tokens are always redeemable, and the hunt for a rare NFT is
                part of the fun.
              </p>
            </div>
          </div>
          <SwapInterface />
        </section>

        <section className="flex flex-col items-center justify-center text-center px-4 py-20">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">TORA NFTs</h2>
            <p className="mb-4">
              TORA NFTs are limited-edition collectibles with a total supply of
              only 1,200 NFT, each minted through the VaultTora swap by
              exchanging 500 $TORA.
              <br />
              All NFTs are tradable or swappable back to tokens anytime, with a
              10 $TORA burn fee. As the supply is capped and utility grows, TORA
              NFTs become increasingly valuable within the VaultTora ecosystem.
            </p>
          </div>
          <CardList />
        </section>
      </div>
    </>
  );
}

function SocialButton({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="bg-gray-400 p-3 rounded-xl hover:scale-105 transition-transform">
      {icon}
    </div>
  );
}

export default App;
