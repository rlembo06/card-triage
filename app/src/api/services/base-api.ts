import axios, { type AxiosInstance } from 'axios'

const BASE_URL = 'http://localhost:3002/'
const HEADERS: { [key: string]: string } = {}

const baseApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: HEADERS,
})

export default baseApi
