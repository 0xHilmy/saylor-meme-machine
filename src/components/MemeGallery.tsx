import { useState } from "react";
import { MemeModal } from "./MemeModal";

const memePlaceholders = [
  {
    id: 1,
    url: "src/components/assets/image/Meme1.png",
    title: "The BTC Prophet Speaks",
    description: "When Saylor raised his hand, the price of Bitcoin rose with it."
  },
  {
    id: 2,
    url: "src/components/assets/image/Meme2.png",
     title: "The Prophecy of $250k begins",
    description: "When the bull defeats the bear"
  },
  {
    id: 3,
    url: "src/components/assets/image/Meme3.png",
    title: "The orange tie is not a coincidence",
    description: "Michael Saylor's signature orange tie represents his unwavering belief in Bitcoin's future"
  },
  {
    id: 4,
    url: "src/components/assets/image/Meme4.png",
    title: "Trust the BTC prophet",
    description: "Spoiler: Only the chosen one could do it."
  }
];

export const MemeGallery = () => {
  const [selectedMeme, setSelectedMeme] = useState<typeof memePlaceholders[0] | null>(null);

  return (
    <div className="h-full flex flex-col px-2">
      <div className="text-center pb-1 pt-2">
        <h2 className="text-xl font-bold text-purple-400">Michael Saylor Prophecy Meme Contest</h2>
        <p className="text-purple-300/80 text-xs pb-2">
          All memes below are created by <a href="https://x.com/CryptQmy" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">@CryptQmy</a> for <a href="https://x.com/GoMining_token" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">@GoMining_token</a> Bounty
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 max-w-[1000px] mx-auto w-full">
        {memePlaceholders.map((meme) => (
          <div
            key={meme.id}
            className="group cursor-pointer"
            onClick={() => setSelectedMeme(meme)}
          >
            <div className="relative overflow-hidden rounded-lg bg-gray-800/50 border border-orange-500/20 shadow-lg group-hover:shadow-xl group-hover:shadow-orange-500/20 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:border-orange-500/50">
              <div className="w-full" style={{ maxWidth: '480px' }}> {/* Scaled down from 1280px for better fit */}
                <div style={{ paddingTop: '75%' }}> {/* (960/1280) * 100% to maintain aspect ratio */}
                  <img
                    src={meme.url}
                    alt={meme.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-sm mb-0.5">{meme.title}</h3>
                <p className="text-xs text-white/80">{meme.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMeme && (
        <MemeModal
          meme={selectedMeme}
          onClose={() => setSelectedMeme(null)}
        />
      )}
    </div>
  );
};
