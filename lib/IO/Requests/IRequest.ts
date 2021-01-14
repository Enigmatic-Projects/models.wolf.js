export default interface IRequest {
    headers?: {
        [key: string]: any;
    };
    body?: {
        [key: string]: any;
    }
}