
import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="flex min-h-screen w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <header className="bg-black/80 backdrop-blur-sm border-b border-orange-500/30 shadow-lg">
            <div className="px-6 py-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Michael Saylor Memes
              </h1>
              <p className="text-orange-300/70 text-sm mt-1">Bitcoin to the Moon 🚀</p>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            {children}
          </main>
          
          <footer className="bg-black border-t border-orange-500/30 text-orange-400 py-4">
            <div className="text-center">
              <p className="text-sm">© 2024 cryptQMY. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
