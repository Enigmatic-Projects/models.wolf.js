import type { IAchievementListBody, IAchievementSubscriberListBody } from "../ReqBody";
import type IRequest from "./IRequest";

export interface IAchievementListReq extends IRequest {
    body: IAchievementListBody;
}

export interface IAchievementSubscriberListReq extends IRequest {
    body: IAchievementSubscriberListBody
}