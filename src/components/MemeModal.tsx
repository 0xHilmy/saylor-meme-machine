import { X } from "lucide-react";

interface MemeModalProps {
  meme: {
    url: string;
    title: string;
    description: string;
  };
  onClose: () => void;
}

export const MemeModal = ({ meme, onClose }: MemeModalProps) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative rounded-2xl shadow-2xl overflow-hidden bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <img
          src={meme.url}
          alt={meme.title}
          className="block max-w-[95vw] max-h-[90vh] w-auto h-auto"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
       
      </div>
    </div>
  );
};
