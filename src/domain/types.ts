export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export interface ApiResponse<T> {
  results: T[];
  total_pages: number;
  page: number;
}
