export default interface ResponseApi<T> {
    detail: {
        success: boolean;
        code: string;
        message: string;
    },
    result: {
        data: T | null
    }
}