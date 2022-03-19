import { MockTriviaRepository } from "../repositories/MockTriviaRepository"
import { TriviaService } from "./TriviaService"

const service = new TriviaService(new MockTriviaRepository()
)

describe("Trivia Service", () => {
	it("should be defined", () => {
		expect(service.getTrivia).toBeDefined()
	})

	it("should return trivia", async () => {
		const { data, errorMessage, hasError, statusCode } = await service.getTrivia()

		expect(data).toBeDefined()
		expect(errorMessage).toBeDefined()
		expect(hasError).toBeDefined()
		expect(statusCode).toBeDefined()
		expect(data.length).toBeGreaterThan(0)
		expect(data[0].getCategory()).toBe("Category")
		expect(data[0].getType()).toBe("boolean")
		expect(data[0].getDifficulty()).toBe("hard")
		expect(data[0].getQuestion()).toBe("Question 1")
		expect(data[0].getCorrectAnswer()).toBe("True")
		expect(data[0].getIncorrectAnswers()).toEqual(["False"])
		expect(hasError).toBe(false)
		expect(statusCode).toBe(200)
		expect(errorMessage).toBe("")
	})
})
