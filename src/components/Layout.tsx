
import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="flex min-h-screen w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <header className="bg-white/80 backdrop-blur-sm border-b border-blue-200 shadow-sm">
            <div className="px-6 py-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Michael Saylor Memes
              </h1>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            {children}
          </main>
          
          <footer className="bg-gray-900 text-white py-4">
            <div className="text-center">
              <p className="text-sm">© 2024 cryptQMY. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
