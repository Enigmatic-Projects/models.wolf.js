import GroupAudioConfig from "./GroupAudioConfig";
import GroupAudioCounts from "./GroupAudioCounts";
import GroupBase from "./GroupBase";
import GroupExtended from "./GroupExtended";

export default class Group {
  Base?: GroupBase = new GroupBase();
  Extended?: GroupExtended = new GroupExtended();
  AudioConfig?: GroupAudioConfig = new GroupAudioConfig();
  AudioCounts?: GroupAudioCounts = new GroupAudioCounts();
}
