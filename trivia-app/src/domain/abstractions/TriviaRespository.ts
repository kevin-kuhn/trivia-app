import { Trivia } from "../entities/Trivia"
import { ApiResponse } from "../types/ApiResponse";

export abstract class TriviaRepository {
	abstract getTrivia(): Promise<ApiResponse<Trivia[]>>
}
