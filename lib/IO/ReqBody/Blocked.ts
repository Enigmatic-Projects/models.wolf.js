export interface ISubscriberBlockListBody {
    /**
     * If true, Events for the Blocked List, Blocked Subscriber & Blocked Subscriber Presence updates will be triggered.
     */
    subscribe?: boolean
}

export interface ISubscriberBlockAddBody {
    /**
     * (Required) Subscriber ID of the contact to add
     */
    id: number

}

export interface ISubscriberBlockDeleteBody {
    /**
     * (Required) Subscriber ID of the contact to delete
     */
    id: number
        
}