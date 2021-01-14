import type { IStoreCreditBalanceBody } from "..";
import type IRequest from "./IRequest";

export interface IStoreCreditBalanceReq extends IRequest {
    body: IStoreCreditBalanceBody
}