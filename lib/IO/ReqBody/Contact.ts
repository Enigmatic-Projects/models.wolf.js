export interface ISubscriberContactListBody {
    /**
     * If true, Events for the Contact List, Contact Subscriber & Contact Subscriber Presence updates will be triggered.
     */
    subscribe?: boolean
}

export interface ISubscriberContactAddBody {
    /**
     * (Required) Subscriber ID of the contact to add
     */
    id: number
}

export interface ISubscriberContactDeleteBody {
    /**
     * (Required) Subscriber ID of the contact to delete
     */
    id: number
}