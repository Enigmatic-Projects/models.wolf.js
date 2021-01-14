import type { ITipAddBody, ITipDetailBody, ITipLeaderboardGlobalBody, ITipLeaderboardGlobalSummaryBody, ITipLeaderboardGroupBody, ITipLeaderboardGroupSummaryBody, ITipSummaryBody } from "..";
import type IRequest from "./IRequest";

export interface ITipAddReq extends IRequest {
    body: ITipAddBody
}

export interface ITipDetailReq extends IRequest {
    body: ITipDetailBody
}

export interface ITipSummaryReq extends IRequest {
    body: ITipSummaryBody
}

export interface ITipGroupSubscribeReq extends IRequest {}

export interface ITipLeaderboardGroupReq extends IRequest {
    body: ITipLeaderboardGroupBody
}

export interface ITipLeaderboardGroupSummaryReq extends IRequest {
    body: ITipLeaderboardGroupSummaryBody
}

export interface ITipLeaderboardGlobalReq extends IRequest {
    body: ITipLeaderboardGlobalBody
}

export interface ITipLeaderboardGlobalSummaryReq extends IRequest {
    body: ITipLeaderboardGlobalSummaryBody
}