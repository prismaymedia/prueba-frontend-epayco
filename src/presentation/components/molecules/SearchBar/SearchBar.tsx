import { SearchBarProps } from './SearchBar.types';

/**
 * SearchBar Molecule Component
 * Barra de búsqueda con contador de resultados
 */
export const SearchBar = ({
  value,
  onChange,
  placeholder = 'Buscar posts...',
  resultsCount,
  totalCount,
}: SearchBarProps) => {
  const handleClear = () => {
    onChange('');
  };

  const showResults = resultsCount !== undefined && totalCount !== undefined;

  return (
    <div className="w-full">
      <div className="relative">
        {/* Ícono de búsqueda */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Input de búsqueda */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3.5 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200"
        />

        {/* Botón de limpiar */}
        {value && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Limpiar búsqueda"
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
        )}
      </div>

      {/* Contador de resultados */}
      {showResults && value && (
        <div className="mt-2 text-sm text-gray-600 flex items-center gap-2">
          <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            Mostrando <span className="font-bold text-indigo-600">{resultsCount}</span> de{' '}
            <span className="font-bold">{totalCount}</span>{' '}
            {totalCount === 1 ? 'post' : 'posts'}
          </span>
        </div>
      )}
    </div>
  );
};
