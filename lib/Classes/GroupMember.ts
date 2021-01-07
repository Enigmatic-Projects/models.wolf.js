import GroupMemberAdditionalInfo from "./GroupMemberAdditionalInfo";

export default class GroupMember {
  Id: number = -1;
  Capabilities: number = 0;
  AdditionalInfo: GroupMemberAdditionalInfo = new GroupMemberAdditionalInfo();
}
