import { useEffect, useState } from "react";
import { getUpcomingMovies } from "../../data/movieService";
import { MovieList } from "../organisms/MovieList";
import { MovieDetail } from "../organisms/MovieDetail";
import { Movie } from "../../domain/types";

export const UpcomingMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getUpcomingMovies();
                setMovies(data);
            } catch (error) {
                console.error("Error al cargar próximas películas:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) return <p className="text-center text-gray-300">Cargando...</p>;

    return (
        <div className="pt-20 ">
            {!selectedMovie ? (
                <>
                    <h1 className="text-3xl font-bold text-yellow-400 mb-6 px-20">
                        🎬  Próximas películas
                    </h1>
                    <MovieList movies={movies} onSelectMovie={setSelectedMovie} />
                </>
            ) : (
                <>
                    <MovieDetail movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
                </>
            )}

        </div>
    );
};
