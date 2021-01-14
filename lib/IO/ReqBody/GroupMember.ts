export interface IGroupMemberListBody {
    /**
     * (Required) Single Group ID to retrieve
     */
    id: number;

    /**
     * Flag denoting whether or not to subscribe to Group Member List updates, and Subscriber Profile & Presence updates for the subscribers in the group. Defaults to TRUE.
     */
    subscribe?: boolean
}

export interface IGroupMemberAddBody {
    /**
     * (semi-optional) Group ID.
     */
    groupId?: number;

    /**
     * (semi-optional) Group Name
     */
    name?: string;

    /**
     * (optional) Password for the group, if required
     */
    password?: string;

    /**
     * (optional) The referrer’s subscriber ID
     */
    referredBy?: string;
}

export interface IGroupMemberUpdateBody {
    /**
     * Group ID
     */
    groupId: number;

    /**
     * Subscriber ID of the group member to update
     */
    subscriberId: number;

    /**
     * The new desired capabilities of the group member. Allowed values: 0 (reset), 1 (admin), 2 (mod), 4 (ban), 8 (silence)
     */
    capabilities: 0 | 1 | 2 | 4 | 8;
}

export interface IGroupMemberDeleteBody {
    /**
     * Group ID
     */
    groupId: number;

    /**
     * Subscriber ID to remove from group. If not provided, it will remove the requester
     */
    subscriberId?: number;
}