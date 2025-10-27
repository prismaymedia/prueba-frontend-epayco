import React from "react";
import { Movie } from "../../domain/types";
import { Text } from "../atoms/Text";

interface MovieCardProps {
    movie: Movie;
    onClick?: () => void;
    isFavorite?: boolean;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick, isFavorite = false }) => {
    const imageUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image';

    return (
        <div
            className="relative bg-gray-800 rounded-xl shadow-lg overflow-hidden transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={onClick}
        >
            {/* ⭐ Favorito */}
            {isFavorite && (
                <span className="absolute top-2 left-2 text-yellow-400 text-xl z-10">⭐</span>
            )}

            <img
                src={imageUrl}
                alt={movie.title}
                className="w-full h-80 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold text-white truncate">
                    {movie.title}
                </h3>
                <Text className="text-sm text-gray-300 line-clamp-2 mt-1">
                    {movie.overview || 'Sin descripción disponible'}
                </Text>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-yellow-400 font-semibold">
                        ⭐ {movie.vote_average.toFixed(1)}
                    </span>
                    <span className="text-gray-400 text-sm">
                        {movie.release_date?.split('-')[0]}
                    </span>
                </div>
            </div>
        </div>
    );
};
