// src/types/lib/utils.types.ts

/**
 * Null veya undefined olabilen bir tip.
 * @example
 * const value: Nullable<string> = null;
 */
export type Nullable<T> = T | null | undefined;

/**
 * API hataları için tip.
 * @property message - Hata mesajı
 * @property statusCode - HTTP durum kodu
 */
export interface ApiError {
	message: string;
	statusCode: number;
}

/**
 * Başarılı bir API cevabı için tip.
 * @property data - API'den dönen veri
 * @property message - Opsiyonel mesaj
 * @property success - İşlemin başarılı olup olmadığı
 */
export interface ApiResponse<T> {
	data: T;
	message?: string;
	success: boolean;
}

/**
 * Key-value çiftleri için tip.
 * @example
 * const headers: KeyValue<string> = { "Content-Type": "application/json" };
 */
export type KeyValue<T = string> = Record<string, T>;

/**
 * Bir fonksiyonun argümanlarını ve dönüş tipini temsil eder.
 * @example
 * type AddFunction = FunctionType<[number, number], number>;
 */
export type FunctionType<
	Args extends unknown[] = unknown[],
	Return = unknown,
> = (...args: Args) => Return;

/**
 * Bir nesnenin tüm özelliklerini optional yapar.
 * @example
 * type PartialUser = PartialRecord<User>;
 */
export type PartialRecord<T> = {
	[P in keyof T]?: T[P];
};

/**
 * Bir nesnenin tüm özelliklerini readonly yapar.
 * @example
 * type ReadonlyUser = ReadonlyRecord<User>;
 */
export type ReadonlyRecord<T> = {
	readonly [P in keyof T]: T[P];
};

/**
 * Bir nesnenin belirli özelliklerini seçer.
 * @example
 * type UserName = PickRecord<User, "firstName" | "lastName">;
 */
export type PickRecord<T, K extends keyof T> = {
	[P in K]: T[P];
};

/**
 * Bir nesnenin belirli özelliklerini hariç tutar.
 * @example
 * type UserWithoutId = OmitRecord<User, "id">;
 */
export type OmitRecord<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Bir nesnenin belirli özelliklerini required yapar.
 * @example
 * type UserWithRequiredId = RequiredRecord<User, "id">;
 */
export type RequiredRecord<T, K extends keyof T> = Omit<T, K> & {
	[P in K]-?: T[P];
};
