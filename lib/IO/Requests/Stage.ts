import type { IStageGroupActiveListBody, IStageListBody } from "..";
import type IRequest from "./IRequest";

export interface IStageListReq extends IRequest {
    body: IStageListBody
}

export interface IStageGroupActiveListReq extends IRequest {
    body: IStageGroupActiveListBody
}