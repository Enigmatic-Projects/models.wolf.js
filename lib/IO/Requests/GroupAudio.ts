import type { IGroupAudioBody, IGroupAudioUpdateBody } from "..";
import type { IGroupAudioBroadcastBody, IGroupAudioBroadcastDisconnectBody, IGroupAudioBroadcastUpdateBody, IGroupAudioConsumeBody, IGroupAudioSlotListBody, IGroupAudioSlotUpdateBody } from "../ReqBody";
import type IRequest from "./IRequest";

export interface IGroupAudioReq extends IRequest {
    body: IGroupAudioBody;
}

export interface IGroupAudioUpdateReq extends IRequest {
    headers: { version: 1 | 2 }
    body: IGroupAudioUpdateBody;
}

export interface IGroupAudioSlotListReq extends IRequest {
    body: IGroupAudioSlotListBody;
}

export interface IGroupAudioSlotUpdateReq extends IRequest {
    body: IGroupAudioSlotUpdateBody;
}

export interface IGroupAudioBroadcastReq extends IRequest {
    body: IGroupAudioBroadcastBody;
}

export interface IGroupAudioBroadcastUpdateReq extends IRequest {
    body: IGroupAudioBroadcastUpdateBody
}

export interface IGroupAudioBroadcastDisconnectReq extends IRequest {
    body: IGroupAudioBroadcastDisconnectBody
}

export interface IGroupAudioConsumeReq extends IRequest {
    body: IGroupAudioConsumeBody
}