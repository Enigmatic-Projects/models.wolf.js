import type { IGroupMemberAddBody, IGroupMemberDeleteBody, IGroupMemberListBody, IGroupMemberUpdateBody } from "..";
import type IRequest from "./IRequest";

export interface IGroupMemberListReq extends IRequest {
    headers: { version: 1 | 2 | 3 }
    body: IGroupMemberListBody
}

export interface IGroupMemberAddReq extends IRequest {
    body: IGroupMemberAddBody
}

export interface IGroupMemberUpdateReq extends IRequest {
    body: IGroupMemberUpdateBody
}

export interface IGroupMemberDeleteReq extends IRequest {
    body: IGroupMemberDeleteBody
}