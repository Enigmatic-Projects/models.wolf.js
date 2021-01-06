import type ISubscriberCharms from "./ISubscriberCharms";
import type ISubscriberExtended from "./ISubscriberExtended";

export default interface ISubscriber {
    id: number;
    hash: string;
    privileges: number;
    nickname: string;
    status: string;
    reputation: number;
    icon: number;
    onlineState: number;
    deviceType: number;
    charms?: ISubscriberCharms;
    extended?: ISubscriberExtended;
}