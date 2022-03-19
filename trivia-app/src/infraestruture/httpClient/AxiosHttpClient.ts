/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from 'axios'
import { HttpClient } from '../../domain/abstractions/HttpClient'
import { ApiResponse } from '../../domain/types/ApiResponse'

export class AxiosHttpClient extends HttpClient {
  private baseUrl: string
  private axiosInstance: AxiosInstance

  constructor(baseUrl: string) {
    super()
    this.baseUrl = baseUrl
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  get<T>(url: string): Promise<ApiResponse<T>> {
    return new Promise<ApiResponse<T>>((resolve, reject) => {
      this.api()
        .get(url)
        .then((response: any) => {
          resolve({
            statusCode: response.status,
            data: response.data as T,
            hasError: false,
            errorMessage: ''
          })
        })
        .catch((response: any) => {
          reject({
            statusCode: response.status,
            data: [],
            hasError: true,
            errorMessage: response.error?.message
          })
        })
    })
  }

  post<T>(url: string, data: any): Promise<ApiResponse<T>> {
    return new Promise<ApiResponse<T>>((resolve, reject) => {
      this.api()
        .post(url, data)
        .then((response: any) => {
          resolve({
            statusCode: response.status,
            data: response.data as T,
            hasError: false,
            errorMessage: ''
          })
        })
        .catch((response: any) => {
          reject({
            statusCode: response.status,
            data: [],
            hasError: true,
            errorMessage: response.error?.message
          })
        })
    })
  }

  put<T>(url: string, data: any): Promise<ApiResponse<T>> {
    return new Promise<ApiResponse<T>>((resolve, reject) => {
      this.api()
        .put(url, data)
        .then((response: any) => {
          resolve({
            statusCode: response.status,
            data: response.data as T,
            hasError: false,
            errorMessage: ''
          })
        })
        .catch((response: any) => {
          reject({
            statusCode: response.status,
            data: [],
            hasError: true,
            errorMessage: response.error?.message
          })
        })
    })
  }

  delete(url: string): void {
    this.axiosInstance.delete(url)
  }

  private api() {
    return this.axiosInstance
  }
}
