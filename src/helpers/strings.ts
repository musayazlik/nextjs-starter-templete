export const capitalize = (str: string): string => {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const truncate = (str: string, maxLength: number): string => {
	return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
};

export const generateSlug = (str: string): string => {
	return str
		.toLowerCase()
		.replace(/[^\w\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/--+/g, "-")
		.trim();
};
