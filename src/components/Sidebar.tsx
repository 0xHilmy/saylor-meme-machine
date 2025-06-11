
import { NavLink, useLocation } from "react-router-dom";
import { Home, Image, Palette, User, Info, Bitcoin } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Michael Saylor Meme Generator", url: "/generator", icon: Palette },
  { title: "Original Meme from Dev", url: "/original", icon: Image },
  { title: "About This Website", url: "/about", icon: Info },
];

export const Sidebar = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside 
      className={`${
        isHovered ? "w-64" : "w-16"
      } bg-gradient-to-b from-gray-900 to-black border-r border-orange-500/30 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Bitcoin className="w-6 h-6 text-black" />
          </div>
          <div className={`transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
            <h2 className="font-bold text-orange-400 whitespace-nowrap">MS Memes</h2>
            <p className="text-xs text-orange-300 whitespace-nowrap">Bitcoin Memes</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.url}
              to={item.url}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                isActive(item.url)
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-black shadow-lg shadow-orange-500/30"
                  : "text-orange-300 hover:bg-orange-500/20 hover:text-orange-400"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className={`font-medium text-sm transition-opacity duration-300 whitespace-nowrap truncate ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}>
                {item.title}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};
