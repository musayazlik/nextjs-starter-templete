"use client";

import { createContext, useContext } from "react";

type User = {
	id: string;
	name: string;
	email: string;
} | null;

type AuthContextType = {
	user: User;
	login: (email: string, password: string) => Promise<void>;
	logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
	user: null,
	login: async () => {},
	logout: () => {},
});

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error("useAuth must be used within an AuthProvider");
	return context;
};

export default AuthContext;
