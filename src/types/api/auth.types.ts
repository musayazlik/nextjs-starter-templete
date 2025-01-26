export interface LoginRequest {
	email: string;
	password: string;
}

export interface LoginResponse {
	token: string;
	user: User;
}

export interface User {
	id: string;
	name: string;
	email: string;
	role: "admin" | "user";
}
