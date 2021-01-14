import type { IAchievementListReq, IAchievementSubscriberListReq } from "./Achievement";
import type { ISubscriberBlockAddReq, ISubscriberBlockDeleteReq, ISubscriberBlockListReq } from "./Blocked";
import type { ICharmListReq, ICharmStarredListReq, ICharmSubscriberActiveListReq, ICharmSubscriberDeleteReq, ICharmSubscriberExpiredListReq, ICharmSubscriberSelectedListReq, ICharmSubscriberSetSelectedReq, ICharmSubscriberStatisticsReq, ICharmSubscriberSummaryListReq } from "./Charm";
import type { ISubscriberContactAddReq, ISubscriberContactDeleteReq, ISubscriberContactListReq } from "./Contact";
import type { IStoreCreditBalanceReq } from "./Credit";
import type { IGroupDiscoveryListReq, IGroupRecommendationListReq } from "./Discover";
import type { IGroupEventReq, IGroupEventCreateReq, IGroupEventListReq, IGroupEventUpdateReq, ISubscriberGroupEventAddReq, ISubscriberGroupEventDeleteReq, ISubscriberGroupEventListReq } from "./Event";
import type { IGroupCreateReq, IGroupProfileReq, IGroupProfileUpdateReq, IGroupStatsReq } from "./Group";
import type { IGroupAudioReq, IGroupAudioBroadcastReq, IGroupAudioBroadcastDisconnectReq, IGroupAudioBroadcastUpdateReq, IGroupAudioConsumeReq, IGroupAudioSlotListReq, IGroupAudioSlotUpdateReq, IGroupAudioUpdateReq } from "./GroupAudio";
import type { IGroupMemberAddReq, IGroupMemberDeleteReq, IGroupMemberListReq, IGroupMemberUpdateReq } from "./GroupMember";
import type IRequest from "./IRequest";
import type { IMessageConversationListReq, IMessageGroupSubscribeReq, IMessageUpdateReq, IMessageUpdateListReq, IMessageSendReq, IMessageSettingUpdateReq, ISubscriberWhitelistAddReq, IMessagePrivateSubscribeReq, IMessageSettingReq } from "./Message";
import type { IMetadataUrlBlacklistReq, IMetadataUrlReq } from "./Metadata";
import type { ISearchReq } from "./Search";
import type { ISecurityLoginReq, ISecurityLogoutReq, ISecurityTokenRefreshReq } from "./Security";
import type { IStageListReq, IStageGroupActiveListReq } from "./Stage";
import type { ISubscriberGroupListReq, ISubscriberPresenceReq, ISubscriberProfileReq, ISubscriberProfileUpdateReq, ISubscriberSettingsReq, ISubscriberSettingsUpdateReq } from "./Subscriber";
import type { ITipAddReq, ITipDetailReq, ITipGroupSubscribeReq, ITipLeaderboardGlobalReq, ITipLeaderboardGlobalSummaryReq, ITipLeaderboardGroupReq, ITipLeaderboardGroupSummaryReq, ITipSummaryReq } from "./Tip";

export {
    IAchievementListReq,
    IAchievementSubscriberListReq,
    ICharmListReq,
    ICharmStarredListReq,
    ICharmSubscriberActiveListReq,
    ICharmSubscriberDeleteReq,
    ICharmSubscriberExpiredListReq,
    ICharmSubscriberSelectedListReq,
    ICharmSubscriberSetSelectedReq,
    ICharmSubscriberStatisticsReq,
    ICharmSubscriberSummaryListReq,
    IGroupAudioReq,
    IGroupAudioBroadcastReq,
    IGroupAudioBroadcastDisconnectReq,
    IGroupAudioBroadcastUpdateReq,
    IGroupAudioConsumeReq,
    IGroupAudioSlotListReq,
    IGroupAudioSlotUpdateReq,
    IGroupAudioUpdateReq,
    IGroupCreateReq,
    IGroupDiscoveryListReq,
    IGroupEventReq,
    IGroupEventCreateReq,
    IGroupEventListReq,
    IGroupEventUpdateReq,
    IGroupMemberAddReq,
    IGroupMemberDeleteReq,
    IGroupMemberListReq,
    IGroupMemberUpdateReq,
    IGroupProfileReq,
    IGroupProfileUpdateReq,
    IGroupRecommendationListReq,
    IGroupStatsReq,
    IMessageConversationListReq,
    IMessageGroupSubscribeReq,
    IMessagePrivateSubscribeReq,
    IMessageUpdateReq,
    IMessageUpdateListReq,
    IMessageSendReq,
    IMessageSettingReq,
    IMessageSettingUpdateReq,
    IMetadataUrlReq,
    IMetadataUrlBlacklistReq,
    IRequest,
    ISearchReq,
    ISecurityLoginReq,
    ISecurityLogoutReq,
    ISecurityTokenRefreshReq,
    IStageListReq,
    IStageGroupActiveListReq,
    IStoreCreditBalanceReq,
    ISubscriberBlockAddReq,
    ISubscriberBlockDeleteReq,
    ISubscriberBlockListReq,
    ISubscriberContactAddReq,
    ISubscriberContactDeleteReq,
    ISubscriberContactListReq,
    ISubscriberGroupEventAddReq,
    ISubscriberGroupEventDeleteReq,
    ISubscriberGroupEventListReq,
    ISubscriberGroupListReq,
    ISubscriberPresenceReq,
    ISubscriberProfileReq,
    ISubscriberProfileUpdateReq,
    ISubscriberSettingsReq,
    ISubscriberSettingsUpdateReq,
    ISubscriberWhitelistAddReq,
    ITipAddReq,
    ITipDetailReq,
    ITipGroupSubscribeReq,
    ITipLeaderboardGlobalReq,
    ITipLeaderboardGlobalSummaryReq,
    ITipLeaderboardGroupReq,
    ITipLeaderboardGroupSummaryReq,
    ITipSummaryReq,
}