import type { ISearchBody } from "..";
import type IRequest from "./IRequest";

export interface ISearchReq extends IRequest {
    body: ISearchBody;
}