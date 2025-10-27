// src/ui/pages/PopularMovies.tsx
import { useState } from "react";
import { usePopularMovies } from "../../hooks/usePopularMovies";
import { MovieList } from "../organisms/MovieList";
import { MovieDetail } from "../organisms/MovieDetail";
import { Movie } from "../../domain/types";

export const PopularMovies = () => {
  const { data: popularMovies, isLoading, error } = usePopularMovies();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen text-yellow-400 text-lg">
        Cargando películas populares...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-lg">
        Error: {error.message}
      </div>
    );

  if (!popularMovies || popularMovies.length === 0)
    return (
      <div className="flex justify-center items-center h-screen text-gray-400 text-lg">
        No hay películas populares disponibles.
      </div>
    );

  return (
    <div className="pt-20 px-4">
      {!selectedMovie ? (
        <>
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 px-20">
            🎬 Películas Populares
          </h2>
          <MovieList movies={popularMovies} onSelectMovie={setSelectedMovie} />
        </>
      ) : (
        <MovieDetail movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};
