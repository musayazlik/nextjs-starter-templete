export const validateEmail = (email: string): boolean => {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
};

export const validatePassword = (password: string): boolean => {
	// Minimum 8 karakter, en az 1 harf ve 1 sayı
	const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
	return regex.test(password);
};

export const validatePhone = (phone: string): boolean => {
	const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
	return regex.test(phone);
};
