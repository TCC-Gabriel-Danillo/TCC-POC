export interface HttpRepository {
    get: <T>(endpoint: string, params?: Record<string, any>, config?: any) => Promise<T | undefined>;
}