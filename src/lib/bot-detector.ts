// src/lib/utils/bot-detector.ts

/**
 * Checks the user agent to detect bots.
 * @param userAgent - Browser user agent string
 * @returns boolean - True if bot, false otherwise
 */
export function isBot(userAgent: string | null): boolean {
	if (!userAgent) return false;

	// Common bot user agents
	const botUserAgents = [
		"googlebot", // Google Bot
		"bingbot", // Bing Bot
		"slurp", // Yahoo Bot
		"duckduckbot", // DuckDuckGo Bot
		"baiduspider", // Baidu Bot
		"yandexbot", // Yandex Bot
		"facebot", // Facebook Bot
		"ia_archiver", // Alexa Bot
		"twitterbot", // Twitter Bot
		"linkedinbot", // LinkedIn Bot
		"embedly", // Embedly Bot
		"quora link preview", // Quora Bot
		"pinterest", // Pinterest Bot
		"slackbot", // Slack Bot
		"vkshare", // VK Share Bot
		"w3c_validator", // W3C Validator
		"whatsapp", // WhatsApp Bot
		"telegrambot", // Telegram Bot
		"discordbot", // Discord Bot
		"curl", // cURL
		"python-requests", // Python Requests
		"node-fetch", // Node.js Fetch
	];

	// Convert user agent to lowercase and search in bot list
	const lowerCaseUserAgent = userAgent.toLowerCase();
	return botUserAgents.some((bot) => lowerCaseUserAgent.includes(bot));
}

/**
 * Detects bots based on IP address.
 * @param ip - User's IP address
 * @returns boolean - True if bot, false otherwise
 */
export function isBotByIP(ip: string | null): boolean {
	if (!ip) return false;

	// Known bot IP ranges (example)
	const botIPRanges = [
		"66.249.64.0/19", // Google Bot
		"157.55.39.0/24", // Bing Bot
		"207.46.0.0/16", // Microsoft Bot
	];

	// Check IP address (can use an example IP check function)
	return botIPRanges.some((range) => isIPInRange(ip, range));
}

/**
 * Checks if an IP address is within a specific range.
 * @param ip - IP address to check
 * @param range - IP range (in CIDR format)
 * @returns boolean - True if in range, false otherwise
 */
function isIPInRange(ip: string, range: string): boolean {
	const [rangeIP, subnetMask] = range.split("/");
	const ipNumber = ipToNumber(ip);
	const rangeIPNumber = ipToNumber(rangeIP);
	const mask = ~(0xffffffff >>> parseInt(subnetMask, 10));

	return (ipNumber & mask) === (rangeIPNumber & mask);
}

/**
 * Converts an IP address to a number.
 * @param ip - IPv4 address
 * @returns number - Numerical value of the IP
 */
function ipToNumber(ip: string): number {
	return ip
		.split(".")
		.reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0);
}
