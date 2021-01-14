export interface IGroupCreateBody {
    /**
     * Group name
     */
    name: string;

    /**
     * User customisable status message text
     */
    description?: string;
        
    /**
     * If the group chat is visible without being logged in
     */
    peekable?: boolean;

    extended?: {
        /**
         * Groups’s custom text about them
         */
        longDescription?: string;

        /**
         * If the group can be see in the group gallery
         */
        discoverable?: boolean;

        /**
         * Whether or not the advanced admin is enabled for this group
         */
        advancedAdmin?: boolean;

        /**
         * Language ID of the groups primary speaking language
         */
        language?: number;

        /**
         * Category ID of the group for the group gallery
         */
        category?: number;

        /**
         * Minimum level required by a user to join this group
         */
        entryLevel?: number;
    }
}

export interface IGroupProfileBody {
    /**
     * (Semi-optional - id, idList or name are required) List of one or more Group IDs to retrieve
     */
    idList?: number[];

    /**
     * (Semi-optional - id, idList or name are required) Single Group ID to retrieve
     */
    id?: number;

    /**
     * (Semi-optional - id, idList or name are required) Single Group Name to retrieve
     */
    name?: number;

    /**
     * Only used in versions 1-3. Flag denoting whether or not to return the extended profile object.
     */
    extended?: boolean;

    /**
     * (Required) Only used in version 4. Array of strings of the desired entities to be returned: 'base’, 'extended’, 'audioConfig’, 'audioCounts’. Must exist, have at least one value, contain no duplicates nor strings that are not as aforementioned.
     */
    entities?: string[];

    /**
     * Flag denoting whether or not to subscribe to Group updates.
     */
    subscribe?: boolean;
}

export interface IGroupProfileUpdateBody {
    /**
     * Group ID to update
     */
    id: number;

    /**
     * User customisable status message text
     */
    description?: string;

    /**
     * If the group chat is visible without being logged in
     */
    peekable?: boolean;

    /**
     * Group’s password for entry
     */
    password: string;

    extended?: {
        /**
         * Groups’s custom text about them
         */
        longDescription?: string;

        /**
         * If the group can be see in the group gallery
         */
        discoverable?: boolean;

        /**
         * Whether or not the advanced admin is enabled for this group
         */
        advancedAdmin?: boolean;

        /**
         * Language ID of the groups primary speaking language
         */
        language?: number;

        /**
         * Category ID of the group for the group gallery
         */
        category?: number;

        /**
         * Minimum level required by a user to join this group
         */
        entryLevel?: number;
    }
}

export interface IGroupStatsBody {
    /**
     * Group ID to update
     */
    id: number;
}