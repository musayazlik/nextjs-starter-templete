// src/types/api/common.types.ts
export interface Pagination {
  page: number;
  limit: number;
  total: number;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}