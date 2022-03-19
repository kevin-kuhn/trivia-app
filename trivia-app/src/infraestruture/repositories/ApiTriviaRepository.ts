/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '../../domain/abstractions/HttpClient'
import { TriviaRepository } from '../../domain/abstractions/TriviaRespository'
import { Trivia } from '../../domain/entities/Trivia'

import { AxiosHttpClient } from '../httpClient/AxiosHttpClient'

import { ApiResponse } from '../../domain/types/ApiResponse'

export class ApiTriviaRepository extends TriviaRepository {
  private httpClient: HttpClient

  constructor() {
    super()
    this.httpClient = new AxiosHttpClient(
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
    )
  }

  async getTrivia(): Promise<ApiResponse<Trivia[]>> {
    return this.httpClient
      .get<any>('')
      .then(response => ({
        ...response,
        data: response.data.results.map(trivia => this.converter(trivia))
      }))
      .catch(error => {
        console.error(error)
        return error
      })
  }

  private converter(response: any): Trivia {
    return new Trivia(
      response.category,
      response.type,
      response.difficulty,
      response.question,
      response.correct_answer,
      response.incorrect_answers
    )
  }
}
