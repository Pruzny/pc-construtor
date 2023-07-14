import axios, { AxiosRequestConfig } from "axios";
import ResultPage from "../models/ResultPage";

class GenericApi<T> {
  static axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
  });
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  create = (data: T) => GenericApi.axiosInstance.post<T>(this.endpoint, data);
  
  delete = (id: number) => GenericApi.axiosInstance.delete(`${this.endpoint}/${id}`);

  update = (id: number, data: T) => GenericApi.axiosInstance.put<T>(`${this.endpoint}/${id}`, data);

  get = (id: number) => GenericApi.axiosInstance.get<T>(`${this.endpoint}/${id}`);

  getAll = () => GenericApi.axiosInstance.get<T[]>(this.endpoint);

  getPage = (config: AxiosRequestConfig) => GenericApi.axiosInstance.get<ResultPage<T>>(`${this.endpoint}/paginacao`, config);
}
export default GenericApi;