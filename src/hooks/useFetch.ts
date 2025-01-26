// helpers/hooks/useFetch.ts
"use client";

import { useState, useEffect } from "react";

type FetchOptions = RequestInit & {
	params?: Record<string, string>;
};

// Usage:
// const { data, loading, error } = useFetch<User[]>("/api/users");

export const useFetch = <T>(url: string, options?: FetchOptions) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Query params ekleme
				const query = options?.params
					? new URLSearchParams(options.params).toString()
					: "";
				const fullUrl = query ? `${url}?${query}` : url;

				const response = await fetch(fullUrl, options);
				if (!response.ok)
					throw new Error(`HTTP error! status: ${response.status}`);

				const result = (await response.json()) as T;
				setData(result);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Bilinmeyen hata");
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url, options]);

	return { data, loading, error };
};
