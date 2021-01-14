export interface IStageListBody {
    /**
     * (Optional) Language Id to localise the stage name
     */
    languageId?: number;
}

export interface IStageGroupActiveListBody {
    /**
     * (Required) Group Id to retrieve the available Stages for
     */
    id: number;
}