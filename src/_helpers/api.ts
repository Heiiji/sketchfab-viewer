import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'

const API_TOKEN = process.env.REACT_APP_API_TOKEN
const API_URL = process.env.REACT_APP_API_URL

const config: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    Pragma: 'no-cache',
    authorization: `Token ${API_TOKEN}`
  }
}

const client: AxiosInstance = axios.create(config)

export default client
