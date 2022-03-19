import { Trivia } from "../entities/Trivia"

export abstract class TriviaRepository {
	abstract getTrivia(): Promise<Trivia[]>
}
