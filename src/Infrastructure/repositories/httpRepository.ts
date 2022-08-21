
import { HttpRepository } from "../../Domain/repositories";
import axios, { AxiosInstance } from "axios"; 


const headers = {
    'Content-Type': 'application/json'
};

export class HttpRepositoryImp implements HttpRepository {
    api: AxiosInstance;
    constructor(baseURL: string){
        this.api = axios.create({
            baseURL, 
            headers
        })
    }
    async get <T>(endpoint: string, params?: Record<string, any>, config?: any) {
        const response = await this.api.get(endpoint, { ...config, params });
        return response.data as T;
    }
    async post <T>(endpoint: string, params?: Record<string, any>, config?: any) {
        const response = await this.api.post(endpoint, { ...params }, { ...config });
        return response.data as T;
    }
   async put <T>(endpoint: string, params?: Record<string, any>, config?: any) {
        const response = await this.api.put(endpoint, { ...params }, { ...config });
        return response.data as T;
    }
    async delete <T>(endpoint: string, params?: any, config?: any) {
        const response = await this.api.delete(endpoint, { ...config, params });
        return response.data as T;
    }
}