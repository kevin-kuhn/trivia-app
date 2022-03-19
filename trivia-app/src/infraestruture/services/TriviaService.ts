import { TriviaRepository } from "../../domain/abstractions/TriviaRespository"
import { ApiResponse } from "../../domain/types/ApiResponse"
import { Trivia } from "../../domain/entities/Trivia"

import { ApiTriviaRepository } from "../repositories/ApiTriviaRepository"

export class TriviaService {
	private repository: TriviaRepository

	constructor(repository: TriviaRepository = new ApiTriviaRepository()) {
		this.repository = repository
	}

	async getTrivia(): Promise<ApiResponse<Trivia[]>> {
		return await this.repository.getTrivia()
	}
}