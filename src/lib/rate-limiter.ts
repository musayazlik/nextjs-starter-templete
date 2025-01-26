import { LRUCache } from "lru-cache";

const cache = new LRUCache<string, number>({
	max: 1000, // Maximum cache size
	ttl: 60 * 1000, // 1 minute TTL (Time To Live)
});

/**
 * Applies rate limiting.
 * @param key - User or IP address making the request
 * @param limit - Maximum number of requests allowed within a specific time period
 * @returns { success: boolean } - true if request limit not exceeded, false if exceeded
 */
export const rateLimiter = {
	limit: (key: string, limit: number = 10) => {
		const currentCount = cache.get(key) || 0;

		if (currentCount >= limit) {
			return { success: false };
		}

		cache.set(key, currentCount + 1);
		return { success: true };
	},
};
