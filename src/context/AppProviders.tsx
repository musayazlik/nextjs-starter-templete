"use client";

import { ReactNode } from "react";
import ThemeProvider from "./theme/ThemeProvider";
import AuthProvider from "./auth/AuthProvider";

export default function AppProviders({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider>
			<AuthProvider>{children}</AuthProvider>
		</ThemeProvider>
	);
}
