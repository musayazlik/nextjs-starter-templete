// src/types/api/user.types.ts
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface UpdateProfileRequest {
  name?: string;
  avatar?: string;
}