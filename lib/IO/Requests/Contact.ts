import type { ISubscriberContactAddBody, ISubscriberContactDeleteBody, ISubscriberContactListBody } from "..";
import type IRequest from "./IRequest";

export interface ISubscriberContactListReq extends IRequest {
    body: ISubscriberContactListBody
}

export interface ISubscriberContactAddReq extends IRequest {
    body: ISubscriberContactAddBody
}

export interface ISubscriberContactDeleteReq extends IRequest {
    body: ISubscriberContactDeleteBody
}