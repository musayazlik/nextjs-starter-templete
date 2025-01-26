// src/tests/lib/api/client.test.ts
import { apiClient } from "@/lib/api/client";

// Mock fetch fonksiyonu
global.fetch = jest.fn();

describe("apiClient", () => {
	beforeEach(() => {
		// Her test öncesinde fetch mock'unu sıfırla
		(fetch as jest.Mock).mockClear();
	});

	it("should return data when the request is successful", async () => {
		// Mock başarılı bir cevap
		const mockData = { id: 1, title: "Test Post" };
		(fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve(mockData),
		});

		const result = await apiClient.get("/posts");
		expect(result).toEqual(mockData);
		expect(fetch).toHaveBeenCalledWith("http://localhost:3000/api/posts", {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer null",
			},
		});
	});

	it("should throw an error when the request fails", async () => {
		// Mock başarısız bir cevap
		(fetch as jest.Mock).mockResolvedValueOnce({
			ok: false,
			status: 404,
			text: () => Promise.resolve("Not Found"),
		});

		await expect(apiClient.get("/posts")).rejects.toThrowError(
			JSON.stringify({ message: "Not Found", statusCode: 404 }),
		);
	});

	it("should include the token in the headers if available", async () => {
		// Mock başarılı bir cevap
		const mockData = { id: 1, title: "Test Post" };
		(fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve(mockData),
		});

		// Token'ı localStorage'a ekle
		localStorage.setItem("token", "test-token");

		const result = await apiClient.get("/posts");
		expect(result).toEqual(mockData);
		expect(fetch).toHaveBeenCalledWith("http://localhost:3000/api/posts", {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer test-token",
			},
		});

		// Token'ı temizle
		localStorage.removeItem("token");
	});

	it("should throw an unknown error when an unexpected error occurs", async () => {
		// Mock bir hata
		(fetch as jest.Mock).mockRejectedValueOnce(new Error("Network Error"));

		await expect(apiClient.get("/posts")).rejects.toThrowError(
			JSON.stringify({ message: "An unknown error occurred", statusCode: 500 }),
		);
	});
});
