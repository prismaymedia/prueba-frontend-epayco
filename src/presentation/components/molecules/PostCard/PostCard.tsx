import { cn } from '../../../../utils/cn';
import { PostCardProps } from './PostCard.types';

/**
 * PostCard Molecule Component
 * Card para mostrar la información de un post
 */
export const PostCard = ({ post, isNew = false }: PostCardProps) => {
  return (
    <article
      className={cn(
        'group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-7 animate-slide-up overflow-hidden',
        'border-2 border-white/50 hover:border-primary-300',
        'transform hover:-translate-y-3 hover:scale-[1.02]',
        isNew && 'ring-4 ring-indigo-300 ring-offset-4 ring-offset-transparent shadow-2xl'
      )}
      style={{
        boxShadow: isNew 
          ? '0 25px 70px -15px rgba(99, 102, 241, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.5)'
          : '0 10px 40px -10px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5)'
      }}
    >
      {/* Efecto de gradiente en hover - más sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-purple-50/20 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Borde animado para nuevos posts */}
      {isNew && (
        <div className="absolute inset-0 rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-2xl opacity-20 animate-pulse-subtle"></div>
        </div>
      )}
      
      {/* Contenido */}
      <div className="relative z-10">
        {isNew && (
          <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xs font-black px-5 py-2 rounded-full mb-5 shadow-lg animate-pulse-subtle tracking-wide uppercase">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>✨ Nuevo</span>
          </div>
        )}

        <h3 className="text-xl font-black text-gray-900 mb-4 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300 leading-tight">
          {post.title}
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
          {post.body}
        </p>

        <div className="flex items-center justify-between text-xs pt-4 border-t-2 border-gray-100">
          <div className="flex items-center gap-2.5 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-2 rounded-xl group-hover:from-indigo-100 group-hover:to-purple-100 transition-all shadow-sm">
            <svg
              className="w-4 h-4 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="font-bold text-indigo-900">Usuario {post.userId}</span>
          </div>

          {post.createdAt && (
            <div className="flex items-center gap-2.5 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-xl group-hover:from-purple-100 group-hover:to-pink-100 transition-all shadow-sm">
              <svg
                className="w-4 h-4 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-bold text-purple-900">{new Date(post.createdAt).toLocaleDateString('es-ES')}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
      </div>
    </article>
  );
};
