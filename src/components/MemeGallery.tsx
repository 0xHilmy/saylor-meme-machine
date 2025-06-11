
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
  }
];

export const MemeGallery = () => {
  const [selectedMeme, setSelectedMeme] = useState<typeof memePlaceholders[0] | null>(null);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Michael Saylor Meme Gallery</h2>
        <p className="text-gray-600">Kumpulan meme terbaik dari komunitas Bitcoin</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memePlaceholders.map((meme) => (
          <div
            key={meme.id}
            className="group cursor-pointer"
            onClick={() => setSelectedMeme(meme)}
          >
            <div className="relative overflow-hidden rounded-xl bg-white shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img
                  src={meme.url}
                  alt={meme.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{meme.title}</h3>
                <p className="text-sm text-gray-600">{meme.description}</p>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl" />
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
