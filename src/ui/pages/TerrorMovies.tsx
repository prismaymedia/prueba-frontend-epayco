import { useEffect, useState } from "react";
import { getMoviesByGenre } from "../../data/movieService";
import { MovieList } from "../organisms/MovieList";
import { MovieDetail } from "../organisms/MovieDetail";
import { Movie } from "../../domain/types";

export const TerrorMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getMoviesByGenre(27);
                setMovies(data);
            } catch (error) {
                console.error("Error al cargar películas de terror:", error);
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
                        👻 Películas de Terror
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
