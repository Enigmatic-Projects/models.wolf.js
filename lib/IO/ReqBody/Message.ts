export interface IMessageGroupSubscribeBody {
    /**
     * (Semi-optional - id or idList are required) List of one or more Group IDs to subscribe to
     */
    idList?: number[];

    /**
     * (Semi-optional - id or idList are required) Single Group ID to subscribe to
     */
    id?: number;
}

export interface IMessageConversationListBody {
    /**
     * Unix epoch (microseconds) supplied if counts need to be calculated for gaps whilst in background
     */
    timestamp: number;
}

export interface IMessageSettingUpdateBody {
    /**
     * Whether or not the spam filter is enabled
     */
    enabled: boolean;

    /**
     * The tier of the spam filter
     */
    tier?: number;
}

export interface IMessageUpdateBody {
    /**
     * (Required) The group id or target subscriber id, respective to the type property
     */
    recipientId: number;

    /**
     * (Required) The message timestamp
     */
    timestamp: number;

    /**
     * (Required) True if this is a group message, else false (assumed private message)
     */
    isGroup: boolean;

    /**
     * Base64 representation of message bytes representing the new body of the message
     */
    data?: string;

    metadata?: {
        /**
         * Flag to delete or restore the message
         */
        isDeleted?: boolean;
    }
}

export interface IMessageUpdateListBody {
    /**
     * (Required) The group id or target subscriber id, respective to the type property
     */
    recipientId: number;

    /**
     * (Required) The message timestamp
     */
    timestamp: number;

    /**
     * (Required) True if this is a group message, else false (assumed private message)
     */
    isGroup: boolean;

    /**
     * The list offset timestamp. The last timetstamp of the previous page of results should be used.
     */
    offsetTimestamp?: number;

    /**
     * The list limit
     */
    limit?: number;
}

export interface IMessageSendBody {
    /**
     * (Required) The group id or target subscriber id, respective to the type property
     */
    recipient: number;

    /**
     * (Required) True if this is a group message, else false (assumed private message)
     */
    isGroup: boolean;

    /**
     *  The body of the message
     */
    data: any;
        
    /**
     * The mimetype of the data
     */
    mimeType: string;
        
    /**
     * Unique ID for tracking if a message is sent
     */
    flightId?: string;
}

export interface ISubscriberWhitelistAddBody {
    /**
     * (Required) The ID of the subscriber to whitelist
     */
    id: number;
}