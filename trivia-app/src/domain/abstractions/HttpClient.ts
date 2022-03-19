/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiResponse } from "../types/ApiResponse";

export abstract class HttpClient {
	abstract get<T>(url: string): Promise<ApiResponse<T>>
	abstract post<T>(url: string, data: any): Promise<ApiResponse<T>>
	abstract put<T>(url: string, data: any): Promise<ApiResponse<T>>
	abstract delete(url: string): void
}