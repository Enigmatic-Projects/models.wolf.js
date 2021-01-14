export interface ISubscriberProfileBody {
    /**
     * (Semi-optional - id or idList are required) A set of subscriber IDs to retrieve. Must have at least 1 and no more than 50. Must not have any duplicates
     */
    idList?: number[];

    /**
     * (Semi-optional - id or idList are required) Single Subscriber ID to retrieve
     */
    id?: number;

    /**
     * (Optional) - List of subscriber hashes matching the idList order
     */
    hashList?: string[];

    /**
     * (Optional) - Single subscriber hash for matching subscriber id
     */
    hash?: string;

    /**
     * (Optional) Flag denoting whether or not to return the extended profile object
     */
    extended?: boolean;

    /**
     * (Optional) Flag denoting whether or not to subscribe to Group updates.
     */
    subscribe?: boolean;
}

export interface ISubscriberProfileUpdateBody {
    /**
     * User nickname
     */
    nickname: string;

    /**
     * User status message
     */
    status?: string;

    extended?: {
        /**
         * User’s full name
         */
        name?: string;

        /**
         * Personal blurb for the user profile
         */
        about?: string;

        /**
         * User gender (or not specified)
         */
        gender?: number;

        /**
         * User’s online relationship interests (or not specified)
         */
        lookingFor?: number;

        /**
         * User relationship status (or not specified)
         */
        relationship?: number;
            
        /**
         * ID for the user’s preferred language (or not specified)
         */
        language?: number;

        /**
         * List of websites/URLs the user would like to advertise
         */
        urls?: string[];
            
        /**
         * DOB
         */
        dateOfBirth: string;
    }
}

export interface ISubscriberGroupListBody {
    /**
     * Flag denoting whether or not to subscribe to relevant events.
     */
    subscribe?: boolean;
}

export interface ISubscriberSettingsUpdateBody {
    state: {
        /**
         * The new state settings
         */
        state: number;
    }
}

export interface ISubscriberPresenceBody {
    /**
     * (Semi-optional - id or idList are required) A set of subscriber IDs to retrieve presence for. Must have at least 1 and no more than 50. Must not have any duplicates
     */
    idList?: number[];

    /**
     * (Semi-optional - id or idList are required) Single Subscriber ID to retrieve presence for
     */
    id?: number;
}