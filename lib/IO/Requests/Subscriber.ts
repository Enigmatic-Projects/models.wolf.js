import type { ISubscriberGroupListBody, ISubscriberPresenceBody, ISubscriberProfileBody, ISubscriberProfileUpdateBody, ISubscriberSettingsUpdateBody } from "..";
import type IRequest from "./IRequest";

export interface ISubscriberProfileReq extends IRequest {
    headers: { version: 1 | 2 | 3 | 4 }
    body: ISubscriberProfileBody
}

export interface ISubscriberProfileUpdateReq extends IRequest {
    body: ISubscriberProfileUpdateBody
}

export interface ISubscriberGroupListReq extends IRequest {
    body: ISubscriberGroupListBody
}

export interface ISubscriberSettingsReq extends IRequest {}

export interface ISubscriberSettingsUpdateReq extends IRequest {
    body: ISubscriberSettingsUpdateBody
}

export interface ISubscriberPresenceReq extends IRequest {
    body: ISubscriberPresenceBody
}