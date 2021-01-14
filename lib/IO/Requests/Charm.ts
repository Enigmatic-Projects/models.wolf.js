import type { ICharmListBody, ICharmSubscriberActiveListBody, ICharmSubscriberDeleteBody, ICharmSubscriberExpiredListBody, ICharmSubscriberSelectedListBody, ICharmSubscriberSetSelectedBody, ICharmSubscriberStatisticsBody, ICharmSubscriberSummaryListBody } from "..";
import type IRequest from "./IRequest";

export interface ICharmListReq extends IRequest {
    body: ICharmListBody
}

export interface ICharmStarredListReq extends IRequest {}

export interface ICharmSubscriberActiveListReq extends IRequest {
    body: ICharmSubscriberActiveListBody
}

export interface ICharmSubscriberExpiredListReq extends IRequest {
    body: ICharmSubscriberExpiredListBody
}

export interface ICharmSubscriberDeleteReq extends IRequest {
    body: ICharmSubscriberDeleteBody
}

export interface ICharmSubscriberSelectedListReq extends IRequest {
    body: ICharmSubscriberSelectedListBody
}

export interface ICharmSubscriberSetSelectedReq extends IRequest {
    body: ICharmSubscriberSetSelectedBody
}

export interface ICharmSubscriberSummaryListReq extends IRequest {
    body: ICharmSubscriberSummaryListBody
}

export interface ICharmSubscriberStatisticsReq extends IRequest {
    body: ICharmSubscriberStatisticsBody
}