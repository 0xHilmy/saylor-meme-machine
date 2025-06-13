import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Scroll } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-indigo-900">
      <div className="text-center space-y-6 bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
        <div className="flex items-center justify-center gap-2 text-4xl">
         
          <h1 className="font-bold text-purple-300">404</h1>
      
        </div>
        <div className="space-y-2">
          <p className="text-xl text-purple-300/80">The prophecy you seek is lost in the mists...</p>
          <p className="text-purple-300/60 text-sm italic">"Not all who wander are lost, but this page certainly is"</p>
        </div>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <Scroll className="w-4 h-4" />
          <span>Return to the Prophecy Hall</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
