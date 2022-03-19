import { Entity } from "./Entity"

export class Trivia extends Entity {
	private category: string
	private type: string
	private difficulty: string
	private question: string
	private correctAnswer: string
	private incorrectAnswers: string[]

	constructor(category: string, type: string, difficulty: string, question: string, correctAnswer: string, incorrectAnswers: string[]) {
		super()
		this.category = category
		this.type = type
		this.difficulty = difficulty
		this.question = question
		this.correctAnswer = correctAnswer
		this.incorrectAnswers = incorrectAnswers
	}

	getCategory(): string {
		return this.category
	}

	getType(): string {
		return this.type
	}

	getDifficulty(): string {
		return this.difficulty
	}

	getQuestion(): string {
		return this.question
	}

	getCorrectAnswer(): string {
		return this.correctAnswer
	}

	getIncorrectAnswers(): string[] {
		return this.incorrectAnswers
	}
}