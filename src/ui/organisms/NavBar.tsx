import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BurgerButton } from "../atoms/BurguerButton";
import { Sidebar } from "./SideBar";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  const handleGoHome = () => {
    navigate("/");
    setIsSidebarOpen(false); 
    window.location.reload();
  };

  return (
    <header className="w-full fixed top-0 left-0 z-20 bg-black/70 backdrop-blur-sm border-b border-gray-700">
      <div className="mx-auto flex items-center justify-between px-4 py-3">
        <BurgerButton isOpen={isSidebarOpen} onToggle={handleToggleSidebar} />

        <h1
          onClick={handleGoHome}
          className="text-2xl font-bold  text-yellow-400 cursor-pointer hover:text-yellow-300 transition ml-20"
        >
          🎬 CineScope
        </h1>

        <p className="text-sm text-gray-300 hidden sm:block">Descubre, busca y explora</p>
      </div>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
        onNavigate={(path) => {
          navigate(path);
        }}
      />
    </header>
  );
};
