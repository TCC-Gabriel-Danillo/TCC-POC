export interface HttpRepository {
    get: <T>(endpoint: string, params?: Record<string, any>, config?: any) => Promise<T | any>;
    post: <T>(endpoint: string, params?: Record<string, any>, config?: any) => Promise<T | any>;
    put: <T>(endpoint: string, params?: Record<string, any>, config?: any) => Promise<T | any>;
    delete: <T>(endpoint: string, params?: any, config?: any) => Promise<T | any>;
}