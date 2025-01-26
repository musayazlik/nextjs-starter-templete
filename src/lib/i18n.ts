// lib/i18n.ts
import { Locale } from "@/config/i18n.config";

type Translations = Record<string, string | Record<string, string>>;

export const loadTranslations = async (
	locale: Locale,
	namespace: string,
): Promise<Translations> => {
	try {
		const translations = await import(`@/locales/${locale}/${namespace}.json`);
		return translations.default;
	} catch (error) {
		console.error(
			`Failed to load translations for ${locale}/${namespace}:`,
			error,
		);
		return {};
	}
};

export const t = (translations: Translations, key: string): string => {
	const keys = key.split(".");
	let result: Translations | string = translations;

	for (const k of keys) {
		if (result && typeof result === "object" && k in result) {
			result = result[k];
		} else {
			return key; // Fallback to key if translation not found
		}
	}

	return typeof result === "string" ? result : key;
};
