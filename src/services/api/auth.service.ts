// src/services/api/auth.service.ts
import { LoginRequest, LoginResponse } from "@/types/api/auth.types";
import { ApiResponse } from "@/types/api/common.types";
import { apiClient } from "@/lib/api/client";

export const AuthService = {
	async login(credentials: LoginRequest): Promise<LoginResponse> {
		const { data } = await apiClient.post<ApiResponse<LoginResponse>>(
			"/auth/login",
			credentials,
		);
		return data;
	},

	async logout(): Promise<void> {
		await apiClient.post("/auth/logout");
	},

	async refreshToken(): Promise<string> {
		const { data } =
			await apiClient.post<ApiResponse<{ token: string }>>("/auth/refresh");
		return data.token;
	},
};
