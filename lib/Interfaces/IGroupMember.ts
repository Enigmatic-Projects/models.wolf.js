import type IGroupMemberAdditionalInfo from "./IGroupMemberAdditionalInfo";

export default interface IGroupMember {
  id: number;
  capabilities: number;
  additionalInfo: IGroupMemberAdditionalInfo;
}
