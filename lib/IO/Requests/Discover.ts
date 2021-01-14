import type { IGroupDiscoveryListBody } from "..";
import type IRequest from "./IRequest";

export interface IGroupDiscoveryListReq extends IRequest {
    body: IGroupDiscoveryListBody
}

export interface IGroupRecommendationListReq extends IRequest {}