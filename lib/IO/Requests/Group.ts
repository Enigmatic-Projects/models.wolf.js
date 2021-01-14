import type { IGroupCreateBody, IGroupProfileBody, IGroupProfileUpdateBody, IGroupStatsBody } from "../ReqBody";
import type IRequest from "./IRequest";

export interface IGroupCreateReq extends IRequest {
    body: IGroupCreateBody
}

export interface IGroupProfileReq extends IRequest {
    headers: { version: 1 | 2 | 3 | 4 }
    body: IGroupProfileBody
}

export interface IGroupProfileUpdateReq extends IRequest {
    body: IGroupProfileUpdateBody
}

export interface IGroupStatsReq extends IRequest {
    headers: { version: 1 | 2 }
    body: IGroupStatsBody
}