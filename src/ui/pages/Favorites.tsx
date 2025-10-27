import React, { useState, useEffect } from "react";
import { Movie } from "../../domain/types";
import { MovieList } from "../organisms/MovieList";
import { MovieDetail } from "../organisms/MovieDetail";

export const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    setFavorites(stored ? JSON.parse(stored) : []);
  }, []);

  const handleBack = () => setSelectedMovie(null);

  return (
    <div className="pt-20 min-h-screen text-white ">
      {!selectedMovie ? (
        favorites.length > 0 ? (
          <MovieList movies={favorites} onSelectMovie={setSelectedMovie} />
        ) : (
          <p className="text-center text-gray-400 text-xl mt-20">
            No hay películas favoritas aún.
          </p>
        )
      ) : (
        <MovieDetail
          movie={selectedMovie}
          onBack={handleBack}
        />
      )}
    </div>
  );
};
