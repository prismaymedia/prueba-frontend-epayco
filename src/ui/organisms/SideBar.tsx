// src/ui/organisms/SideBar.tsx
import { motion } from "framer-motion";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNavigate }) => {
  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const handleNavigate = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white z-50 flex flex-col px-4 py-6"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ type: "tween" }}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="self-end text-white text-2xl font-bold mb-4"
        >
          ✕
        </button>

        {/* Menú */}
        <nav className="flex flex-col gap-4 ">
          <button onClick={() => handleNavigate("/")} className="text-left hover:text-yellow-400 transition">
            Inicio
          </button>
          <button onClick={() => handleNavigate("/favorites")} className="text-left hover:text-yellow-400 transition">
            Películas Favoritas
          </button>
          <button onClick={() => handleNavigate("/popular")} className="text-left hover:text-yellow-400 transition">
            Populares
          </button>
          <button onClick={() => handleNavigate("/action")} className="text-left hover:text-yellow-400 transition">
            Acción
          </button>
          <button onClick={() => handleNavigate("/animation")} className="text-left hover:text-yellow-400 transition">
            Animación
          </button>
          <button onClick={() => handleNavigate("/horror")} className="text-left hover:text-yellow-400 transition">
            Terror
          </button>
          <button onClick={() => handleNavigate("/upcoming")} className="text-left hover:text-yellow-400 transition">
            Próximos Estrenos
          </button>
        </nav>
      </motion.aside>
    </>
  );
};
