import React from "react";
import { LayoutProps } from "./Layout.types";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white shadow-md fixed w-full z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
              <img className="h-8 w-auto" src="/lista.png" alt="Logo" />
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-large"
              >
                List
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 mt-16 overflow-y-auto bg-gray-100 p-4">
        <div className="h-full w-full">{children}</div>
      </main>
    </div>
  );
};
