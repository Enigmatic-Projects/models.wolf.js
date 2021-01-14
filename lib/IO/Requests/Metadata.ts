import type { IMetadataUrlBody } from "..";
import type IRequest from "./IRequest";

export interface IMetadataUrlReq extends IRequest {
    body: IMetadataUrlBody
}

export interface IMetadataUrlBlacklistReq extends IRequest {}