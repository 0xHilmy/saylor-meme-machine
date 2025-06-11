
import { X } from "lucide-react";

interface MemeModalProps {
  meme: {
    id: number;
    url: string;
    title: string;
    description: string;
  };
  onClose: () => void;
}

export const MemeModal = ({ meme, onClose }: MemeModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-[90vh] w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
          <div className="aspect-square max-h-[70vh] overflow-hidden relative">
            <img
              src={meme.url}
              alt={meme.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute bottom-4 right-4 bg-orange-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              <span>Close</span>
            </button>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{meme.title}</h3>
            <p className="text-gray-600">{meme.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
