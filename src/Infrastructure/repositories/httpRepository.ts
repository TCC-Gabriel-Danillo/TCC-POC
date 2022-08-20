import { HttpRepository } from "../../Domain/repositories";

class HttpRepositoryImp implements HttpRepository {
    get: <T>(path: string, params?: Record<string, any> | undefined, config?: any) => Promise<any>;
    post: <T>(path: string, params?: Record<string, any> | undefined, config?: any) => Promise<any>;
    put: <T>(path: string, params?: Record<string, any> | undefined, config?: any) => Promise<any>;
    delete: <T>(path: string, params?: any, config?: any) => Promise<any>;
    
}