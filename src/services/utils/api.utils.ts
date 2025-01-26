// src/services/utils/api.utils.ts
import { ApiError } from "@/types/lib/utils.types";

export const handleApiError = (error: unknown): ApiError => {
	if (error instanceof Error) {
		return { message: error.message, statusCode: 500 };
	}
	return { message: "An unknown error occurred", statusCode: 500 };
};
