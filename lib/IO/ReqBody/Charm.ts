export interface ICharmListBody {
    /**
     * (Semi-Optional) Ids of the charms to fetch
     */
    idList?: number;

    /**
     * (Semi-Optional) The Id of a single charm to fetch
     */
    id?: number;
}

export interface ICharmSubscriberActiveListBody {
    /**
     * (Required) Subscriber ID.
     */
    id: number;
}

export interface ICharmSubscriberExpiredListBody {
    /**
     * (Required) Subscriber ID.
     */
    id: number;
}

export interface ICharmSubscriberDeleteBody {
    /**
     * (Semi Required) List of active charm ids. If this exists, it will be used as the priority parameter to search for, ahead of id field. Requires one or more IDs in the list.
     */
    idList?: number;

    /**
     * (Semi Required) active charm id. This will be used if idList does not exist.
     */
    id?: number;
}

export interface ICharmSubscriberSelectedListBody {
    /**
     * (Semi Required) List of subscriber IDs. If this exists, it will be used as the priority parameter to search for, ahead of id field. Requires one or more IDs in the list.
     */
    idList?: number;

    /**
     * (Semi Required) Subscriber ID. This will be used if idList does not exist.
     */
    id?: number;
}

export interface ICharmSubscriberSetSelectedBody {
    selectedCharms: {
        /**
         * (Required) ID for the active instance of the charm.
         */
        activeCharmId: number;

        /**
         * (Required) ID for the charm.
         */
        charmId: number;

        /**
         * (Required) Position of the charm on the GUI.
         */
        position: number;
    }[]
}

export interface ICharmSubscriberSummaryListBody {
    /**
     * (Required) Subscriber ID.
     */
    id: number;
}

export interface ICharmSubscriberStatisticsBody {
    /**
     * (Required) Subscriber ID.
     */
    id: number;

    /**
     * Will include further stats such as most gifted charm
     */
    extended?: boolean;
}