import type { IMessageConversationListBody, IMessageGroupSubscribeBody, IMessageSendBody, IMessageSettingUpdateBody, IMessageUpdateBody, IMessageUpdateListBody, ISubscriberWhitelistAddBody } from "..";
import type IRequest from "./IRequest";

export interface IMessageGroupSubscribeReq extends IRequest {
    headers: { version: 1 | 2 | 3 | 4 }
    body: IMessageGroupSubscribeBody
}

export interface IMessagePrivateSubscribeReq extends IRequest {}

export interface IMessageConversationListReq extends IRequest {
    headers: { version: 1 | 2 | 3 | 4 }
    body: IMessageConversationListBody
}

export interface IMessageSettingReq extends IRequest {}

export interface IMessageSettingUpdateReq extends IRequest {
    body: IMessageSettingUpdateBody
}

export interface IMessageUpdateReq extends IRequest {
    body: IMessageUpdateBody
}

export interface IMessageUpdateListReq extends IRequest {
    body: IMessageUpdateListBody
}

export interface IMessageSendReq extends IRequest {
    body: IMessageSendBody
}

export interface ISubscriberWhitelistAddReq extends IRequest {
    body: ISubscriberWhitelistAddBody
}