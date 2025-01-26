export const API_CONFIG = {
	BASE_URL: process.env.NEXT_PUBLIC_API_URL,
	DEFAULT_HEADERS: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
	TIMEOUT: 10000, // 10 saniye
} as const;
