import type { ISubscriberBlockAddBody, ISubscriberBlockDeleteBody, ISubscriberBlockListBody } from "../ReqBody";
import type IRequest from "./IRequest";

export interface ISubscriberBlockListReq extends IRequest {
    body: ISubscriberBlockListBody;
}

export interface ISubscriberBlockAddReq extends IRequest {
    body: ISubscriberBlockAddBody
}

export interface ISubscriberBlockDeleteReq extends IRequest {
    body: ISubscriberBlockDeleteBody
}