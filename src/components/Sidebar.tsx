
import { NavLink, useLocation } from "react-router-dom";
import { Home, Image, Palette, User, Info } from "lucide-react";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Michael Saylor Meme Generator", url: "/generator", icon: Palette },
  { title: "Original Meme from Dev", url: "/original", icon: Image },
  { title: "About This Website", url: "/about", icon: Info },
];

export const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="w-64 bg-white/90 backdrop-blur-sm border-r border-blue-200 shadow-lg">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-gray-800">MS Memes</h2>
            <p className="text-xs text-gray-500">Meme Generator</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.url}
              to={item.url}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive(item.url)
                  ? "bg-gradient-to-r from-blue-500 to-orange-500 text-white shadow-lg"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium text-sm">{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};
