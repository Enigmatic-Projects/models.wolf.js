import type { ISecurityLoginBody } from "..";
import type IRequest from "./IRequest";

export interface ISecurityLoginReq extends IRequest {
    headers: { version: 1 | 2 }
    body: ISecurityLoginBody;
}

export interface ISecurityLogoutReq extends IRequest {}

export interface ISecurityTokenRefreshReq extends IRequest {}