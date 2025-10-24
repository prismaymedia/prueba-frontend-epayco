import { useContext } from 'react';
import { ToastContext } from '../context/ToastContext';

/**
 * Custom Hook para usar el sistema de Toast
 * Proporciona métodos para mostrar notificaciones
 */
export const useToast = () => {
  const context = useContext(ToastContext);
  
  if (!context) {
    throw new Error('useToast debe ser usado dentro de ToastProvider');
  }
  
  return context;
};
