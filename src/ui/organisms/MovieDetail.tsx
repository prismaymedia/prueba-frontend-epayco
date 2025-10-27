import React, { useState, useEffect } from "react";
import { Movie } from "../../domain/types";
import { Button } from "../atoms/Button";

interface MovieDetailProps {
    movie: Movie;
    onBack: () => void;
}

export const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onBack }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const imageUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image";

    const getFavorites = (): Movie[] => {
        const stored = localStorage.getItem("favorites");
        return stored ? JSON.parse(stored) : [];
    };

    const addFavorite = (movie: Movie) => {
        const favorites = getFavorites();
        localStorage.setItem(
            "favorites",
            JSON.stringify([...favorites, movie])
        );
        setIsFavorite(true);
    };

    const removeFavorite = (movieId: number) => {
        const favorites = getFavorites().filter((fav) => fav.id !== movieId);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        setIsFavorite(false);
        window.location.reload();
    };

    useEffect(() => {
        const favorites = getFavorites();
        setIsFavorite(favorites.some((fav) => fav.id === movie.id));
    }, [movie.id]);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4">
            <button
                onClick={onBack}
                className="come-back bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg mb-6 cursor-pointer"
            >
                ← Volver
            </button>

            <div className="flex flex-col md:flex-row gap-8">
                <img
                    src={imageUrl}
                    alt={movie.title}
                    className="w-full md:w-1/3 rounded-2xl shadow-lg object-cover"
                />

                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
                    <p className="text-gray-300 mb-3">
                        Fecha de lanzamiento: {movie.release_date}
                    </p>
                    <p className="text-yellow-400 mb-6 font-semibold">
                        ⭐ Calificación: {movie.vote_average.toFixed(1)}
                    </p>
                    <p className="text-gray-200 leading-relaxed">{movie.overview}</p>

                    <br />
                    <Button
                        variant="primary"
                        onClick={() =>
                            isFavorite ? removeFavorite(movie.id) : addFavorite(movie)
                        }
                    >
                        {isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
                    </Button>

                </div>
            </div>
        </div>
    );
};
