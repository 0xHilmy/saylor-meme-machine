import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Sparkles } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900">
      <div className="flex min-h-screen w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <header className="bg-black/40 backdrop-blur-sm border-b border-purple-500/30 shadow-lg">
            <div className="px-1 py-1 flex items-center ">
              <div className="w-24 h-24 flex-shrink-0">
                <img 
                  src="/src/components/assets/image/saylorprophecy.png"
                  alt="Saylor Wizard"
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div>
                <h1 className="text-3xl font-bold flex items-center gap-2">
                  <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent">
                    The Saylor Prophecy
                  </span>
                </h1>
                <p className="text-purple-300/70 text-sm mt-1 italic">
                  "In Bitcoin we trust, through wisdom we prosper"
                </p>
              </div>
            </div>
          </header>
          
          <main className="flex-1 flex flex-col px-4 pb-4 overflow-hidden">
            {children}
          </main>
          
          <footer className="bg-black/40 backdrop-blur-sm border-t border-purple-500/30">
            <div className="text-center py-2 flex items-center justify-center gap-2">
              <p className="text-sm text-purple-400">
                Made with prophecy &amp; a little bit of humor by{" "}
                <a
                  href="https://x.com/CryptQmy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-fuchsia-300 transition-colors"
                >
                  @cryptQMY
                </a>{" - "}
               2025
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
