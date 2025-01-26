// config/i18n.config.ts
export const SUPPORTED_LOCALES = ["en", "tr", "de"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_NAMES: Record<Locale, string> = {
	en: "English",
	tr: "Türkçe",
	de: "Deutsch",
};
