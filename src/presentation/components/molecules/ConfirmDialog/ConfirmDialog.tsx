import { ConfirmDialogProps } from './ConfirmDialog.types';

/**
 * ConfirmDialog Molecule Component
 * Diálogo de confirmación elegante con animaciones
 */
export const ConfirmDialog = ({
  isOpen,
  title,
  message,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  onConfirm,
  onCancel,
  type = 'warning',
}: ConfirmDialogProps) => {
  if (!isOpen) return null;

  const typeStyles = {
    warning: {
      icon: 'from-yellow-400 to-orange-500',
      iconBg: 'from-yellow-50 to-orange-50',
      confirmBtn: 'from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600',
      iconPath: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      ),
    },
    danger: {
      icon: 'from-red-400 to-red-600',
      iconBg: 'from-red-50 to-red-100',
      confirmBtn: 'from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800',
      iconPath: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      ),
    },
    info: {
      icon: 'from-blue-400 to-indigo-600',
      iconBg: 'from-blue-50 to-indigo-50',
      confirmBtn: 'from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600',
      iconPath: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
  };

  const styles = typeStyles[type];

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      {/* Backdrop mejorado */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
        onClick={onCancel}
      ></div>

      {/* Dialog Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className="relative w-full max-w-md animate-slide-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Dialog Content con gradiente sutil de fondo */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-white/50">
            {/* Barra superior con gradiente del proyecto */}
            <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

            {/* Decoraciones de fondo */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-full -mr-24 -mt-24 opacity-20 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-orange-200 via-yellow-200 to-amber-200 rounded-full -ml-20 -mb-20 opacity-20 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 p-8">
              {/* Icon con gradiente */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative group">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${styles.icon} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  {/* Icon container */}
                  <div className={`relative bg-gradient-to-br ${styles.iconBg} rounded-2xl p-4 shadow-lg`}>
                    <svg
                      className={`w-10 h-10 bg-gradient-to-br ${styles.icon} bg-clip-text text-transparent`}
                      fill="none"
                      stroke="url(#gradient-stroke)"
                      viewBox="0 0 24 24"
                    >
                      <defs>
                        <linearGradient id="gradient-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f59e0b" />
                          <stop offset="100%" stopColor="#ef4444" />
                        </linearGradient>
                      </defs>
                      {styles.iconPath}
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title con gradiente */}
              <h3 className="text-2xl font-black text-center mb-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                {title}
              </h3>

              {/* Message */}
              <p className="text-gray-600 text-center mb-8 leading-relaxed">
                {message}
              </p>

              {/* Actions con diseño mejorado */}
              <div className="flex gap-3">
                <button
                  onClick={onCancel}
                  className="flex-1 px-5 py-3.5 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                >
                  {cancelText}
                </button>
                <button
                  onClick={onConfirm}
                  className={`flex-1 px-5 py-3.5 bg-gradient-to-r ${styles.confirmBtn} text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]`}
                >
                  {confirmText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
