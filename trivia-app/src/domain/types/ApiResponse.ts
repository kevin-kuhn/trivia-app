export interface ApiResponse<T> {
	statusCode: number
	data: T
	hasError: boolean
	errorMessage: string
}