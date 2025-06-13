import { NavLink, useLocation } from "react-router-dom";
import { Home, Sparkles, LineChart, Book } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { title: "Gallery", url: "/", icon: Home },
  { title: "Create Meme", url: "/generator", icon: Sparkles },
  { title: "Bitcoin Chart", url: "/btc-chart", icon: LineChart },
  { title: "About this Website", url: "/about", icon: Book },
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
      } bg-gradient-to-b from-purple-900 to-black border-r border-purple-500/30 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden flex flex-col`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        <div className={`p-4 ${isHovered ? "" : "items-center"} flex flex-col`}>
          
          <nav className="flex flex-col gap-2 items-center w-full">
            {menuItems.map((item) => (
              <NavLink
                key={item.url}
                to={item.url}
                className={({ isActive }) =>
                  `flex items-center pl-2 ${isHovered ? "w-full px-2" : "justify-center w-10"} h-10 rounded-lg transition-all duration-200 ${
                    isActive
                      ? isHovered 
                        ? "bg-purple-500/20 text-purple-300"
                        : "text-purple-300"
                      : isHovered
                        ? "text-gray-400 hover:bg-purple-500/10 hover:text-purple-300"
                        : "text-gray-400 hover:text-purple-300"
                  }`
                }
              >
                <div className={`flex items-center justify-center ${isHovered ? "w-8" : "w-5"}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <span className={`transition-opacity duration-300 ml-3 ${
                  isHovered ? "opacity-100" : "opacity-0 w-0"
                }`}>
                  {item.title}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};
