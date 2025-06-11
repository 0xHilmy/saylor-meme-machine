
import { useState, useRef } from "react";
import { Download, Type, Move } from "lucide-react";

interface TextElement {
  id: number;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  color: string;
}

export const MemeGenerator = () => {
  const [textElements, setTextElements] = useState<TextElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<number | null>(null);
  const [newText, setNewText] = useState("");
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ isDragging: boolean; startX: number; startY: number }>({
    isDragging: false,
    startX: 0,
    startY: 0,
  });

  const addText = () => {
    if (!newText.trim()) return;
    
    const newElement: TextElement = {
      id: Date.now(),
      text: newText,
      x: 50,
      y: 50,
      fontSize: 24,
      color: "#ffffff",
    };
    
    setTextElements([...textElements, newElement]);
    setNewText("");
  };

  const handleMouseDown = (e: React.MouseEvent, elementId: number) => {
    e.preventDefault();
    setSelectedElement(elementId);
    dragRef.current.isDragging = true;
    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragRef.current.isDragging || selectedElement === null) return;

    const deltaX = e.clientX - dragRef.current.startX;
    const deltaY = e.clientY - dragRef.current.startY;

    setTextElements(prev =>
      prev.map(el =>
        el.id === selectedElement
          ? { ...el, x: el.x + deltaX, y: el.y + deltaY }
          : el
      )
    );

    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
  };

  const handleMouseUp = () => {
    dragRef.current.isDragging = false;
    setSelectedElement(null);
  };

  const deleteElement = (elementId: number) => {
    setTextElements(prev => prev.filter(el => el.id !== elementId));
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Michael Saylor Meme Generator</h2>
        <p className="text-gray-600">Buat meme Bitcoin sendiri dengan Michael Saylor</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Canvas Area */}
        <div className="space-y-4">
          <div
            ref={canvasRef}
            className="relative w-full aspect-square bg-gray-200 rounded-xl overflow-hidden cursor-move"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {textElements.map((element) => (
              <div
                key={element.id}
                className={`absolute cursor-move select-none font-bold text-center shadow-lg ${
                  selectedElement === element.id ? "ring-2 ring-blue-500" : ""
                }`}
                style={{
                  left: element.x,
                  top: element.y,
                  fontSize: element.fontSize,
                  color: element.color,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  WebkitTextStroke: "1px black",
                }}
                onMouseDown={(e) => handleMouseDown(e, element.id)}
                onDoubleClick={() => deleteElement(element.id)}
              >
                {element.text}
              </div>
            ))}
            
            {textElements.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/80">
                  <Type className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-lg font-semibold">Tambahkan teks untuk memulai</p>
                  <p className="text-sm">Drag untuk memindahkan, double-click untuk hapus</p>
                </div>
              </div>
            )}
          </div>
          
          <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Download Meme
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Type className="w-5 h-5" />
              Tambah Teks
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teks Meme
                </label>
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  placeholder="Masukkan teks meme..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyDown={(e) => e.key === "Enter" && addText()}
                />
              </div>
              
              <button
                onClick={addText}
                disabled={!newText.trim()}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Tambah Teks
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Move className="w-5 h-5" />
              Instruksi
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Klik dan drag teks untuk memindahkan posisi</li>
              <li>• Double-click pada teks untuk menghapus</li>
              <li>• Tekan Enter untuk menambah teks baru</li>
              <li>• Download meme setelah selesai editing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
