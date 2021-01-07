import type IGroupAudioConfig from "./IGroupAudioConfig";
import type IGroupAudioCounts from "./IGroupAudioCounts";
import type IGroupBase from "./IGroupBase";
import type IGroupExtended from "./IGroupExtended";

export default interface IGroup {
  base?: IGroupBase;
  extended?: IGroupExtended;
  audioConfig?: IGroupAudioConfig;
  audioCounts?: IGroupAudioCounts;
}
