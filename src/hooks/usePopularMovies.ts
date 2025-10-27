import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from '../data/movieService';
import { Movie } from '../domain/types';

export const usePopularMovies = () => {
    return useQuery<Movie[], Error>({
        queryKey: ['popularMovies'],
        queryFn: getPopularMovies,
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10
    })
}