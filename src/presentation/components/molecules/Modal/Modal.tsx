import { useEffect, useCallback } from 'react';
import { ModalProps } from './Modal.types';

/**
 * Modal Molecule Component
 * Modal reutilizable con backdrop y animaciones
 */
export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'lg',
  onCloseAttempt,
}: ModalProps) => {
  // Handler para intentar cerrar el modal
  const handleCloseAttempt = useCallback(async () => {
    if (onCloseAttempt) {
      const canClose = await onCloseAttempt();
      if (canClose) {
        onClose();
      }
    } else {
      onClose();
    }
  }, [onCloseAttempt, onClose]);

  // Cerrar con tecla ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleCloseAttempt();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, handleCloseAttempt]);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'max-w-full mx-4',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={handleCloseAttempt}
      ></div>

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className={`relative w-full ${sizeClasses[size]} animate-slide-up`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            {title && (
              <div className="relative px-8 pt-8 pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {title}
                  </h3>
                  <button
                    onClick={handleCloseAttempt}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                    aria-label="Cerrar modal"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Body */}
            <div className="relative">
              {!title && (
                <button
                  onClick={handleCloseAttempt}
                  className="absolute top-6 right-6 z-10 text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                  aria-label="Cerrar modal"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
