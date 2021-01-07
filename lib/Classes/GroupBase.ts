import GenericSimple from "./GenericSimple";

export default class GroupBase {
  Id: number = -1;
  Name: string = "";
  Hash: string = "";
  Description: string = "";
  Reputation: number = 0.0;
  Premium: boolean = false;
  Icon: number = -1;
  Members: number = 0;
  Official: boolean = false;
  Peekable: boolean = false;
  Owner: GenericSimple = new GenericSimple();
}
