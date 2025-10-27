import { useState } from 'react';
import { usePopularMovies } from '../../hooks/usePopularMovies';
import { getMoviesByGenre, getUpcomingMovies } from '../../data/movieService';
import { Movie } from '../../domain/types';
import { MovieList } from '../organisms/MovieList';
import { MovieDetail } from '../organisms/MovieDetail';
import { SearchBar } from '../molecules/SearchBar';
import { searchMovies } from '../../data/movieService';
import { Navbar } from '../organisms/NavBar';
import { MovieCarousel } from '../organisms/MovieCarousel';
import "../../index.css";


export const Home = () => {
  const { data: popularMovies, isLoading, error } = usePopularMovies();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = async (query: string) => {
    setIsSearching(true);
    try {
      const results = await searchMovies(query);
      setSearchResults(results);
      setNoResults(results.length === 0);
    } catch (error) {
      console.log("Error al buscar peliculas", error);
    } finally {
      setIsSearching(false);
    }
  }

  if (isLoading) return <div className="text-center mt-8 text-white">Cargando...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error.message}</div>;

  return (
    <div>
      <Navbar />
      {!selectedMovie ? (
        <div className="pt-20">
          <h1 className="text-3xl font-bold text-center py-6">Explorar películas</h1>
          <SearchBar onSearch={handleSearch} />

          {isSearching && <p className="text-center text-gray-300 mt-4">Buscando...</p>}

          {noResults ? (
            <div className="text-center text-gray-400 mt-10">
              <span className="text-5xl block mb-2">🎬</span>
              <p className="text-4xl">No se encontraron coincidencias</p>
            </div>
          ) : searchResults.length > 0 ? (
            <MovieList movies={searchResults} onSelectMovie={setSelectedMovie} />
          ) : (
            <div className="space-y-8">
              <MovieCarousel title="Populares" fetchFn={() => Promise.resolve(popularMovies || [])} onSelectMovie={setSelectedMovie} />
              <MovieCarousel title="Acción" fetchFn={() => getMoviesByGenre(28)} onSelectMovie={setSelectedMovie} />
              <MovieCarousel title="Animación" fetchFn={() => getMoviesByGenre(16)} onSelectMovie={setSelectedMovie} />
              <MovieCarousel title="Terror" fetchFn={() => getMoviesByGenre(27)} onSelectMovie={setSelectedMovie} />
              <MovieCarousel title="Próximos estrenos" fetchFn={() => getUpcomingMovies()} onSelectMovie={setSelectedMovie} />
            </div>
          )}
        </div>
      ) : (
        <div className="pt-15">
          <MovieDetail movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
        </div>
      )}
    </div>
  );
};