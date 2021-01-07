import { SubscriberCharms, SubscriberExtended } from "..";

export default class Subscriber {
  Id: number = -1;
  Hash: string = "";
  Privileges: number = -1;
  Nickname: string = "";
  Status: string = "";
  Reputation: number = 0.0;
  Icon: number = -1;
  OnlineState: number = 0;
  DeviceType: number = 0;
  Charms?: SubscriberCharms = new SubscriberCharms();
  Extended?: SubscriberExtended = new SubscriberExtended();
}
