export interface IGroupAudioBody {
    /**
     * Required. Single Group ID to retrieve the audio profile for.
     */
    id: number;

    /**
     * Optional. Flag denoting whether or not to subscribe to Audio Profile updates for the given group ID. Defaults to false.
     */
    subscribe?: boolean;
}

export interface IGroupAudioUpdateBody {
    /**
     * The Group ID
     */
    id: number;

    /**
     * False by default, until configured otherwise
     */
    enabled?: boolean;

    /**
     * Rep Level that group members must be to listen or provide audio.
     */
    minRepLevel?: number;

    /**
     * Audio stage type chosen for the group
     */
    stageId: number;
}

export interface IGroupAudioSlotListBody {
    /**
     * Required. Single Group ID to retrieve the audio slot information for.
     */
    id: number;

    /**
     * Optional. Flag denoting whether or not to subscribe to Audio Slot updates for the given group ID. Defaults to false.
     */
    subscribe?: boolean;
}

export interface IGroupAudioSlotUpdateBody {
    /**
     * (Required) The ID of the group to update slots for.
     */
    id: number;

    slot: {
            
        /**
         * (Required) ID of the slot within a group Audio Profile.
         */
        id: number;

        /**
         * Whether or not Audio slot is locked
         */
        locked: boolean;
    }
}

export interface IGroupAudioBroadcastBody {
    /**
     * (Required) Group Id to broadcast the audio to.
     */
    id: number;

    /**
     * (Required) Slot Id to broadcast the audio to.
     */
    slotId: number;

    /**
     * (Required) Session Description Protocol (SDP) message
     */
    sdp: string;
}

export interface IGroupAudioBroadcastUpdateBody {
    /**
     * (Required) Group Id to update the audio broadcast for.
     */
    id: number;

    /**
     * (Required) Slot Id to update the audio broadcast for.
     */
    slotId: number;

    /**
     * (Required) The ID of the subscriber making the request.
     */
    occupierId: number;

    /**
     * Whether or not the occupier is muted. Defaults to false
     */
    occupierMuted: boolean;
}

export interface IGroupAudioBroadcastDisconnectBody {
    /**
     * (Required) Group Id to update the audio broadcast for.
     */
    id: number;

    /**
     * (Required) Slot Id to update the audio broadcast for.
     */
    slotId: number;

    /**
     * (Required) The ID of the subscriber making the request.
     */
    occupierId: number;
}

export interface IGroupAudioConsumeBody {
    /**
     * (Required) Group Id to broadcast the audio to.
     */
    id: number;

    /**
     * (Required) Slot Id to broadcast the audio to.
     */
    slotId: number;

    /**
     * (Required) Session Description Protocol (SDP) message
     */
    sdp: string;
}