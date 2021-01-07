import type IGenericSimple from "./IGenericSimple";

export default interface IGroupBase {
  id: number;
  name: string;
  hash: string;
  description: string;
  reputation: number;
  premium: boolean;
  icon: number;
  members: number;
  official: boolean;
  peekable: boolean;
  owner: IGenericSimple;
}
