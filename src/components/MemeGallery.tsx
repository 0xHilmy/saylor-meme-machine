
import { useState } from "react";
import { MemeModal } from "./MemeModal";

const memePlaceholders = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
    title: "Bitcoin Moon Meme",
    description: "When Bitcoin hits $100k"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
    title: "Diamond Hands",
    description: "HODL Forever"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
    title: "Tech Adoption",
    description: "Bitcoin is the future"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
    title: "Code Life",
    description: "Programming Bitcoin"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
    title: "Work Setup",
    description: "Trading Bitcoin"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
    title: "Study Time",
    description: "Learning about Bitcoin"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1501286353178-1ec871214838?w=400&h=400&fit=crop",
    title: "Crypto Monkey",
    description: "Bitcoin Apes"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop",
    title: "Bull Market",
    description: "Up Only"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=400&h=400&fit=crop",
    title: "Buzzing Markets",
    description: "Busy Trading"
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=400&h=400&fit=crop",
    title: "Bitcoin Herd",
    description: "Following the Trend"
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=400&fit=crop",
    title: "Whale Alert",
    description: "Big Money Moves"
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=400&h=400&fit=crop",
    title: "Bullish Pair",
    description: "Strong Market"
  },
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400&h=400&fit=crop",
    title: "Bull Run",
    description: "Breaking Through"
  },
  {
    id: 14,
    url: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=400&h=400&fit=crop",
    title: "Cold Storage",
    description: "Secure Bitcoin"
  },
  {
    id: 15,
    url: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=400&fit=crop",
    title: "Steady Growth",
    description: "Patience Pays"
  },
  {
    id: 16,
    url: "https://images.unsplash.com/photo-1438565434616-3ef039228b15?w=400&h=400&fit=crop",
    title: "Peak Performance",
    description: "All-Time High"
  },
  {
    id: 17,
    url: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=400&fit=crop",
    title: "Long-Term Hodlers",
    description: "Staying the Course"
  },
  {
    id: 18,
    url: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=400&fit=crop",
    title: "Four-Year Cycle",
    description: "Bitcoin Halvings"
  },
  {
    id: 19,
    url: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=400&h=400&fit=crop",
    title: "Market Predators",
    description: "Survival of the Fittest"
  },
  {
    id: 20,
    url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
    title: "Bitcoin Pizza",
    description: "Historic Purchase"
  },
  {
    id: 21,
    url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
    title: "Sleeping Giant",
    description: "Bitcoin Awakening"
  },
  {
    id: 22,
    url: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop",
    title: "Small but Mighty",
    description: "Stacking Sats"
  },
  {
    id: 23,
    url: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=400&h=400&fit=crop",
    title: "Network Effect",
    description: "Growing Adoption"
  },
  {
    id: 24,
    url: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=400&h=400&fit=crop",
    title: "Institutional Investors",
    description: "Big Money Flowing In"
  },
  {
    id: 25,
    url: "https://images.unsplash.com/photo-1438565434616-3ef039228b15?w=400&h=400&fit=crop",
    title: "Bitcoin Summit",
    description: "Reaching New Heights"
  },
  {
    id: 26,
    url: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=400&fit=crop",
    title: "Store of Value",
    description: "Digital Gold"
  },
  {
    id: 27,
    url: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=400&h=400&fit=crop",
    title: "Cold Wallets",
    description: "Self-Custody"
  },
  {
    id: 28,
    url: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=400&h=400&fit=crop",
    title: "Fierce Market",
    description: "Volatility is Opportunity"
  },
  {
    id: 29,
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
    title: "Bitcoin Development",
    description: "Building the Future"
  },
  {
    id: 30,
    url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
    title: "Trading Station",
    description: "Bitcoin Command Center"
  }
];

export const MemeGallery = () => {
  const [selectedMeme, setSelectedMeme] = useState<typeof memePlaceholders[0] | null>(null);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-orange-400 mb-2">Michael Saylor Meme Gallery</h2>
        <p className="text-orange-300/80">Best meme collection from the Bitcoin community</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {memePlaceholders.map((meme) => (
          <div
            key={meme.id}
            className="group cursor-pointer"
            onClick={() => setSelectedMeme(meme)}
          >
            <div className="relative overflow-hidden rounded-xl bg-gray-800/50 border border-orange-500/20 shadow-lg group-hover:shadow-xl group-hover:shadow-orange-500/20 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:border-orange-500/50">
              <div className="aspect-square overflow-hidden">
                <img
                  src={meme.url}
                  alt={meme.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
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
