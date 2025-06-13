import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { Download, Type, Move, Sparkles } from "lucide-react";

interface TextElement {
  id: number;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  color: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  fontFamily?: string;
  outline?: boolean;
}

const FONT_FAMILIES = [
  { label: 'Arial', value: 'Arial, sans-serif' },
  { label: 'Times New Roman', value: 'Times New Roman, serif' },
  { label: 'Comic Sans', value: 'Comic Sans MS, Comic Sans, cursive' },
  { label: 'Courier New', value: 'Courier New, monospace' },
  { label: 'Impact', value: 'Impact, Charcoal, sans-serif' },
];

export const MemeGenerator = () => {
  const [textElements, setTextElements] = useState<TextElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<number | null>(null);
  const [newText, setNewText] = useState("");
  const [editingText, setEditingText] = useState<number | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ isDragging: boolean; startX: number; startY: number }>({
    isDragging: false,
    startX: 0,
    startY: 0,
  });
  const [snapGuide, setSnapGuide] = useState<{ vertical: boolean; horizontal: boolean }>({ vertical: false, horizontal: false });
  const [textSize, setTextSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const measureRef = useRef<HTMLSpanElement>(null);

  const updateElementStyle = (elementId: number, newStyle: Partial<TextElement>) => {
    setTextElements(prev =>
      prev.map(el =>
        el.id === elementId ? { ...el, ...newStyle } : el
      )
    );
  };

  // Measure selected text size
  useLayoutEffect(() => {
    if (selectedElement !== null) {
      const el = textElements.find(t => t.id === selectedElement);
      if (el && measureRef.current) {
        measureRef.current.style.fontSize = `${el.fontSize}px`;
        measureRef.current.textContent = el.text;
        const rect = measureRef.current.getBoundingClientRect();
        setTextSize({ width: rect.width, height: rect.height });
      }
    }
  }, [selectedElement, textElements]);

  const addText = () => {
    if (!newText.trim()) return;
    
    const newElement: TextElement = {
      id: Date.now(),
      text: newText,
      x: 50,
      y: 50,
      fontSize: 24,
      color: "#ffffff",
      outline: false,
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
    // If mouse is moved without the primary button held down, stop dragging.
    if (e.buttons !== 1 && dragRef.current.isDragging) {
      dragRef.current.isDragging = false;
      setSnapGuide({ vertical: false, horizontal: false });
      return;
    }

    if (!dragRef.current.isDragging || selectedElement === null) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = e.clientX - dragRef.current.startX;
    const deltaY = e.clientY - dragRef.current.startY;

    setTextElements(prev =>
      prev.map(el => {
        if (el.id !== selectedElement) return el;

        // Get the text element's dimensions
        const textElement = document.querySelector(`[data-text-id="${el.id}"]`);
        const textRect = textElement?.getBoundingClientRect();
        const width = textRect?.width || (el.text.length * (el.fontSize * 0.6));
        const height = textRect?.height || el.fontSize;

        let newX = el.x + deltaX;
        let newY = el.y + deltaY;
        let showVertical = false;
        let showHorizontal = false;

        // Calculate center positions
        const textCenterX = newX + (width / 2);
        const textCenterY = newY + (height / 2);

        // Snap to center if close enough
        if (Math.abs(textCenterX - centerX) < 10) {
          showVertical = true;
          if (Math.abs(textCenterX - centerX) < 5) {
            newX = centerX - (width / 2);
          }
        }

        if (Math.abs(textCenterY - centerY) < 10) {
          showHorizontal = true;
          if (Math.abs(textCenterY - centerY) < 5) {
            newY = centerY - (height / 2);
          }
        }

        setSnapGuide({ vertical: showVertical, horizontal: showHorizontal });
        return { ...el, x: newX, y: newY };
      })
    );

    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
  };

  const handleMouseUp = () => {
    dragRef.current.isDragging = false;
    setSnapGuide({ vertical: false, horizontal: false });
  };

  // Ensure drag stops even if mouseup is outside canvas
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      dragRef.current.isDragging = false;
      setSnapGuide({ vertical: false, horizontal: false });
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const deleteElement = (elementId: number) => {
    setTextElements(prev => prev.filter(el => el.id !== elementId));
  };

  return (
    <div className="space-y-2">
      <div className="text-center pt-2">
        <h2 className="text-xl font-bold text-purple-600 mb-2 flex items-center justify-center gap-2">
          
          Create Your Saylor Prophecy Meme
          
        </h2>
        <p className="text-purple-500/80 text-sm">Transform the iconic moment into crypto history</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Canvas Area */}
        <div className="space-y-4">
          <div
            ref={canvasRef}
            className="relative w-full max-w-[600px] mx-auto aspect-[837/628] bg-gray-200 rounded-xl overflow-hidden cursor-move shadow-lg shadow-purple-500/20"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseDown={e => {
              if (e.target === canvasRef.current) {
                setSelectedElement(null);
              }
            }}
          >
            <span ref={measureRef} style={{ position: 'absolute', visibility: 'hidden', whiteSpace: 'pre', fontWeight: 'bold', left: 0, top: 0, pointerEvents: 'none' }} />
            <img
              src={"/src/components/assets/image/mainMeme.jpg"}
              alt="Main Meme"
              className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
              draggable={false}
            />
            {selectedElement !== null && (
              <>
                {snapGuide.vertical && (
                  <div className="absolute left-1/2 top-0 h-full border-l-2 border-dashed border-purple-500/60 z-20" style={{transform: 'translateX(-50%)'}} />
                )}
                {snapGuide.horizontal && (
                  <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-purple-500/60 z-20" style={{transform: 'translateY(-50%)'}} />
                )}
              </>
            )}
            {textElements.map((element) => (
              <div
                key={element.id}
                data-text-id={element.id}
                className={`absolute cursor-move select-none text-center shadow-lg group ${
                  selectedElement === element.id ? "ring-2 ring-purple-500" : ""
                }`}
                style={{
                  left: element.x,
                  top: element.y,
                  fontSize: element.fontSize,
                  color: element.color,
                  fontWeight: element.bold ? 'bold' : 'normal',
                  fontStyle: element.italic ? 'italic' : 'normal',
                  textDecoration: element.underline ? 'underline' : 'none',
                  fontFamily: element.fontFamily || 'Arial, sans-serif',
                  textShadow: element.outline ? "2px 2px 4px rgba(0,0,0,0.8)" : "none",
                  WebkitTextStroke: element.outline ? "1px black" : "0",
                  WebkitTextStrokeWidth: element.outline ? "1px" : "0",
                  WebkitTextStrokeColor: "black",
                }}
                onMouseDown={e => { e.stopPropagation(); handleMouseDown(e, element.id); }}
                onClick={e => e.stopPropagation()}
                onMouseUp={e => e.stopPropagation()}
                onMouseEnter={e => e.stopPropagation()}
                onMouseLeave={e => e.stopPropagation()}
                onDoubleClick={e => { 
                  e.stopPropagation(); 
                  if (editingText === element.id) return;
                  setEditingText(element.id);
                }}
              >
                <button 
                  className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteElement(element.id);
                  }}
                >
                  ×
                </button>
                {editingText === element.id ? (
                  <input
                    type="text"
                    value={element.text}
                    onChange={(e) => {
                      setTextElements(prev =>
                        prev.map(el =>
                          el.id === element.id ? { ...el, text: e.target.value } : el
                        )
                      );
                    }}
                    onBlur={() => setEditingText(null)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setEditingText(null);
                      }
                    }}
                    className="bg-transparent text-center outline-none min-w-[50px] max-w-[300px] w-auto"
                    style={{
                      color: 'inherit',
                      fontWeight: 'inherit',
                      fontStyle: 'inherit',
                      textDecoration: 'inherit',
                      fontFamily: 'inherit',
                      WebkitTextStroke: 'inherit',
                      width: `${element.text.length + 2}ch`,
                    }}
                    autoFocus
                  />
                ) : (
                  element.text
                )}
              </div>
            ))}
          </div>
          
          <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20">
            <Download className="w-5 h-5" />
            Share Your Prophecy
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-4">
          {/* Text Style Controls */}
          {selectedElement !== null && (
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg shadow-purple-500/20 border border-purple-500/20">
              <h3 className="text-base font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <Type className="w-5 h-5" />
                Text Style
              </h3>
              <div className="flex flex-wrap gap-2 items-center">
                {(() => {
                  const el = textElements.find(t => t.id === selectedElement);
                  if (!el) return null;
                  return <>
                    <label className="flex items-center gap-1 text-xs">
                      Size
                      <input
                        type="number"
                        min={10}
                        max={120}
                        value={el.fontSize}
                        onChange={e => updateElementStyle(el.id, { fontSize: Number(e.target.value) })}
                        className="w-16 px-1 py-0.5 border rounded-md"
                      />
                    </label>
                    <label className="flex items-center gap-1 text-xs">
                      Color
                      <input
                        type="color"
                        value={el.color}
                        onChange={e => updateElementStyle(el.id, { color: e.target.value })}
                        className="w-7 h-7 p-0 border-none rounded-md"
                      />
                    </label>
                    <div className="flex gap-1">
                      <button
                        className={`px-2 py-0.5 rounded-md font-bold text-xs border ${el.bold ? 'bg-purple-600 text-white' : 'bg-white text-purple-700'}`}
                        onClick={() => updateElementStyle(el.id, { bold: !el.bold })}
                      >B</button>
                      <button
                        className={`px-2 py-0.5 rounded-md italic text-xs border ${el.italic ? 'bg-purple-600 text-white' : 'bg-white text-purple-700'}`}
                        onClick={() => updateElementStyle(el.id, { italic: !el.italic })}
                      >I</button>
                      <button
                        className={`px-2 py-0.5 rounded-md underline text-xs border ${el.underline ? 'bg-purple-600 text-white' : 'bg-white text-purple-700'}`}
                        onClick={() => updateElementStyle(el.id, { underline: !el.underline })}
                      >U</button>
                      <button
                        className={`px-2 py-0.5 rounded-md text-xs border ${el.outline ? 'bg-purple-600 text-white' : 'bg-white text-purple-700'}`}
                        onClick={() => updateElementStyle(el.id, { outline: !el.outline })}
                        title="Toggle Outline"
                      >O</button>
                    </div>
                    <label className="flex items-center gap-1 text-xs w-full">
                      Font
                      <select
                        value={el.fontFamily || FONT_FAMILIES[0].value}
                        onChange={e => updateElementStyle(el.id, { fontFamily: e.target.value })}
                        className="w-full px-1 py-0.5 border rounded-md"
                      >
                        {FONT_FAMILIES.map(f => (
                          <option key={f.value} value={f.value}>{f.label}</option>
                        ))}
                      </select>
                    </label>
                  </>;
                })()}
              </div>
            </div>
          )}

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg shadow-purple-500/20 border border-purple-500/20">
            <h3 className="text-base font-semibold text-purple-800 mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Inscribe Your Vision
            </h3>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-purple-700 mb-1">
                  Prophetic Message
                </label>
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  placeholder="What does your crystal ball reveal?"
                  className="w-full px-2 py-1 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/50 backdrop-blur-sm text-sm"
                  onKeyDown={(e) => e.key === "Enter" && addText()}
                />
              </div>
              
              <button
                onClick={addText}
                disabled={!newText.trim()}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-1.5 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-purple-500/20"
              >
                Speak Your Truth
              </button>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg shadow-purple-500/20 border border-purple-500/20">
            <h3 className="text-base font-semibold text-purple-800 mb-3 flex items-center gap-2">
              <Move className="w-5 h-5" />
              Prophecy Guidelines
            </h3>
            <ul className="space-y-1 text-xs text-purple-700">
              <li>• Click and drag to position your prophecy</li>
              <li>• Double-click text to remove it</li>
              <li>• Press Enter to add your message</li>
              <li>• Share with #MichaelSaylorProphecy</li>
              <li>• Don't forget to tag @GoMining_token</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
