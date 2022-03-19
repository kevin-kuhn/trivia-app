/* eslint-disable @typescript-eslint/no-explicit-any */
import { TriviaRepository } from '../../domain/abstractions/TriviaRespository'

import { ApiResponse } from '../../domain/types/ApiResponse'
import { Trivia } from '../../domain/entities/Trivia'

export class MockTriviaRepository extends TriviaRepository {
  async getTrivia(): Promise<ApiResponse<Trivia[]>> {
    const list: Trivia[] = []

    list.push(
      new Trivia('Category', 'boolean', 'hard', 'Question 1', 'True', ['False'])
    )
    list.push(
      new Trivia('Category', 'boolean', 'hard', 'Question 2', 'False', ['True'])
    )
    list.push(
      new Trivia('Category', 'boolean', 'hard', 'Question 3', 'True', ['False'])
    )
    list.push(
      new Trivia('Category', 'boolean', 'hard', 'Question 4', 'False', ['True'])
    )

    return new Promise(resolve =>
      resolve({
        data: list,
        statusCode: 200,
        hasError: false,
        errorMessage: ''
      })
    )
  }
}
