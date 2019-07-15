export interface IHttpAction<T> {
    type: string;
    payload: T;
}
