export interface ISubscriberGroupEventListBody {
    /**
     * Flag denoting whether or not to subscribe to Group Eventupdates.
     */
    subscribe?: boolean;
}

export interface ISubscriberGroupEventAddBody {
    /**
     * The ID of the event
     */
    id: number;
}

export interface ISubscriberGroupEventDeleteBody {
    /**
     * The ID of the event
     */
    id: number;
}

export interface IGroupEventBody {
    /**
     * (Semi-optional - id, or idList are required) List of one or more Group Event IDs to retrieve
     */
    idList?: number[],

    /**
     * (Semi-optional - id, or idList are required) Group Event ID to retrieve
     */
    id?: number,
}

export interface IGroupEventListBody {
    /**
     * Group ID
     */
    id: number;

    /**
     * (Optional) Flag denoting whether or not to subscribe to Group Event updates.
     */
    subscribe?: boolean;
}

export interface IGroupEventCreateBody {
    /**
     * Group ID
     */
    groupId: number;

    /**
     * The title of the event
     */
    title: string;
    
    /**
     * The short description of the event
     */
    shortDescription: string;

    /**
     * The long description of the event
     */
    longDescription: string;

    /**
     * The time the event starts
     */
    startsAt: string;

    /**
     * The time the event ends
     */
    endsAt: string;
}

export interface IGroupEventUpdateBody {
    /**
     * The ID of the Event
     */
    id: number;

    /**
     * The title of the event
     */
    title: string;

    /**
     * The short description of the event
     */
    shortDescription: string;

    /**
     * The long description of the event
     */
    longDescription: string;

    /**
     * The time the event starts
     */
    startsAt: string;

    /**
     * The time the event ends
     */
    endsAt: string;
}