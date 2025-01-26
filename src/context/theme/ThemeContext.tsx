"use client";

import { createContext, useContext } from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
	theme: Theme;
	toggleTheme: () => void;
};

// Başlangıç değerleri (default values)
const ThemeContext = createContext<ThemeContextType>({
	theme: "light",
	toggleTheme: () => {},
});

// Özel hook
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
};

export default ThemeContext;
