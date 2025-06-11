export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface ErrorResponse {
  message: string;
  status: number;
}

export interface ApiError {
  message: string;
  status: number;
  details?: any;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
