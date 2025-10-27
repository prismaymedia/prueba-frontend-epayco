import axios from 'axios';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: { api_key: apiKey, language: 'en-US', page: 1 },
    });
    return response.data.results; 
  } catch (error) {
    console.error('Error al obtener películas populares:', error);
    throw error;
  }
};

export const getMoviesByGenre = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: apiKey,
      language: 'en-US',
      page: 1,
      with_genres: id,
    },
  });
  return response.data.results;
};

export const getUpcomingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
      params: { api_key: apiKey, language: 'en-US', page: 1 },
    });
    return response.data.results; 
  } catch (error) {
    console.error('Error al obtener películas populares:', error);
    throw error;
  }
};


export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: { api_key: apiKey, query, language: 'en-US', page: 1 },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error al buscar películas:', error);
    throw error;
  }
};

export const getMovieDetail = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: { api_key: apiKey, language: 'en-US' },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener detalle de película:', error);
    throw error;
  }
};