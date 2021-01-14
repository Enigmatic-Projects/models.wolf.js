import type { IGroupEventBody, IGroupEventCreateBody, IGroupEventListBody, IGroupEventUpdateBody, ISubscriberGroupEventAddBody, ISubscriberGroupEventDeleteBody, ISubscriberGroupEventListBody } from '..';
import type IRequest from './IRequest';

export interface ISubscriberGroupEventListReq extends IRequest {
    body: ISubscriberGroupEventListBody
}

export interface ISubscriberGroupEventAddReq extends IRequest {
    body: ISubscriberGroupEventAddBody
}

export interface ISubscriberGroupEventDeleteReq extends IRequest {
    body: ISubscriberGroupEventDeleteBody
}

export interface IGroupEventReq extends IRequest {
    body: IGroupEventBody
}

export interface IGroupEventListReq extends IRequest {
    body: IGroupEventListBody
}

export interface IGroupEventCreateReq extends IRequest {
    body: IGroupEventCreateBody
}

export interface IGroupEventUpdateReq extends IRequest {
    body: IGroupEventUpdateBody
}