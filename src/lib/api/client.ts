// src/lib/api/client.ts
import { ApiError } from "@/types/lib/utils.types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface RequestOptions extends RequestInit {
  params?: Record<string, string | number>;
}

export const apiClient = {
  async get<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { params, ...rest } = options;
    const queryString = params ? `?${new URLSearchParams(params as Record<string, string>)}` : '';
    return request<T>(`${endpoint}${queryString}`, { ...rest, method: 'GET' });
  },

  async post<T>(endpoint: string, data?: unknown, options: RequestOptions = {}): Promise<T> {
    return request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

	async patch<T>(endpoint: string, data?: unknown, options: RequestOptions = {}): Promise<T> {
		return request<T>(endpoint, {
			...options,
			method: 'PATCH',
			body: JSON.stringify(data),
		});
	},

	async delete<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
		return request<T>(endpoint, { ...options, method: 'DELETE' });
	},

	
};

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    ...options.headers,
  };

  try {
    const response = await fetch(url, { ...options, headers });

    if (!response.ok) {
      const error: ApiError = {
        message: await response.text(),
        statusCode: response.status,
      };
      throw error;
    }

    return (await response.json()) as T;
  } catch (error) {
    throw {
      message: error instanceof Error ? error.message : 'An unknown error occurred',
      statusCode: 500,
    } as ApiError;
  }
}