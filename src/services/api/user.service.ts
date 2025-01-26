// src/services/api/user.service.ts
import { UserProfile, UpdateProfileRequest } from "@/types/api/user.types";
import { ApiResponse } from "@/types/api/common.types";
import { apiClient } from "@/lib/api/client";

export const UserService = {
	async getProfile(): Promise<UserProfile> {
		const { data } = await apiClient.get<ApiResponse<UserProfile>>("/users/me");
		return data;
	},

	async updateProfile(profile: UpdateProfileRequest): Promise<UserProfile> {
		const { data } = await apiClient.patch<ApiResponse<UserProfile>>(
			"/users/me",
			profile,
		);
		return data;
	},
};
