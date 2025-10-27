import React, { useEffect, useState } from "react";
import { Movie } from "../../domain/types";
import { MovieCard } from "../molecules/MovieCard";

interface MovieListProps {
  movies: Movie[];
  onSelectMovie?: (movie: Movie) => void;
}

export const MovieList: React.FC<MovieListProps> = ({ movies, onSelectMovie }) => {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  useEffect(() => {
    // Leer favoritos desde localStorage
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const parsed: Movie[] = JSON.parse(storedFavorites);
      setFavoriteIds(parsed.map(movie => movie.id));
    } else {
      setFavoriteIds([]);
    }
  }, [movies]);

  if (!movies?.length) {
    return <p className="text-gray-400 text-center">No hay películas disponibles.</p>;
  }

  return (
    <div className="grid gap-6 grid-cols-2 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:px-20">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => onSelectMovie?.(movie)}
          isFavorite={favoriteIds.includes(movie.id)}
        />
      ))}
    </div>
  );
};
