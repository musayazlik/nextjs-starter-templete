export type CountryCode = "TR" | "US" | "DE" | "FR";

export const COUNTRIES: Record<CountryCode, string> = {
	TR: "Türkiye",
	US: "United States",
	DE: "Germany",
	FR: "France",
} as const;

export const COUNTRY_CODES = Object.keys(COUNTRIES) as CountryCode[];
