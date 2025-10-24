import { useEffect } from 'react';
import { ToastProps } from './Toast.types';

/**
 * Toast Atom Component
 * Notificación temporal con animaciones y auto-cierre
 */
export const Toast = ({
  id,
  message,
  type,
  duration = 5000,
  onClose,
}: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const typeStyles = {
    success: {
      bg: 'bg-green-50 border-green-200',
      text: 'text-green-800',
      icon: 'text-green-500',
      progress: 'bg-green-500',
      iconPath: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      ),
    },
    error: {
      bg: 'bg-red-50 border-red-200',
      text: 'text-red-800',
      icon: 'text-red-500',
      progress: 'bg-red-500',
      iconPath: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      ),
    },
    warning: {
      bg: 'bg-yellow-50 border-yellow-200',
      text: 'text-yellow-800',
      icon: 'text-yellow-500',
      progress: 'bg-yellow-500',
      iconPath: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      ),
    },
    info: {
      bg: 'bg-blue-50 border-blue-200',
      text: 'text-blue-800',
      icon: 'text-blue-500',
      progress: 'bg-blue-500',
      iconPath: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
  };

  const styles = typeStyles[type];

  return (
    <div
      className={`relative ${styles.bg} border ${styles.text} px-6 py-4 rounded-xl shadow-lg backdrop-blur-sm animate-slide-up mb-3 overflow-hidden`}
      style={{
        minWidth: '320px',
        maxWidth: '500px',
      }}
    >
      {/* Progress bar */}
      <div
        className={`absolute bottom-0 left-0 h-1 ${styles.progress} animate-toast-progress`}
        style={{
          animation: `toastProgress ${duration}ms linear forwards`,
        }}
      />

      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className={`flex-shrink-0 ${styles.icon}`}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {styles.iconPath}
          </svg>
        </div>

        {/* Message */}
        <div className="flex-1 pt-0.5">
          <p className="font-semibold text-sm leading-relaxed">{message}</p>
        </div>

        {/* Close button */}
        <button
          onClick={() => onClose(id)}
          className={`flex-shrink-0 ${styles.icon} hover:opacity-70 transition-opacity`}
          aria-label="Cerrar notificación"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  );
};
