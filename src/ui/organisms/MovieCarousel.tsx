import { useEffect, useState, useRef } from "react";
import { Movie } from "../../domain/types";
import { MovieCard } from "../molecules/MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MovieCarouselProps {
  title: string;
  fetchFn: () => Promise<Movie[]>;
  onSelectMovie: (movie: Movie) => void;
}

export const MovieCarousel = ({ title, fetchFn, onSelectMovie }: MovieCarouselProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  
    useEffect(() => {
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        const parsed: Movie[] = JSON.parse(storedFavorites);
        setFavoriteIds(parsed.map(movie => movie.id));
      } else {
        setFavoriteIds([]);
      }
    }, [movies]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchFn();
        setMovies(data);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar las películas.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [fetchFn]);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.offsetWidth; // mueve una "pantalla" completa
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (isLoading)
    return (
      <div className="text-center text-gray-400 py-10">Cargando {title}...</div>
    );

  if (error)
    return (
      <div className="text-center text-red-500 py-10">{error}</div>
    );

  if (movies.length === 0)
    return (
      <div className="text-center text-gray-400 py-10">
        No hay películas disponibles en esta categoría.
      </div>
    );

  return (
    <section className="my-8 relative px-10">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4 px-4">{title}</h2>

      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 z-10 cursor-pointer"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 z-10 cursor-pointer"
      >
        <ChevronRight size={24} />
      </button>

      <div
        ref={carouselRef}
        className="
        flex gap-4 overflow-x-hidden overflow-y-hidden scrollbar-hide px-5
        snap-x snap-mandatory scroll-smooth
        "
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="shrink-0 w-1/2 sm:w-1/3 md:w-1/4 snap-center cursor-pointer"
            onClick={() => onSelectMovie(movie)}
          >
            <MovieCard movie={movie} isFavorite={favoriteIds.includes(movie.id)} />
          </div>
        ))}
      </div>

    </section>
  );
};
