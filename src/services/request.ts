export interface IResponseProps<T> {
    status: number;
    message: string;
    data: T;
}