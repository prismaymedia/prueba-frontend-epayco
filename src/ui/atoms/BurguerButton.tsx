import React from "react";
import { Menu, X } from "lucide-react"; 

interface BurgerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-lg"
      aria-label="Abrir o cerrar menú lateral"
    >
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  );
};
