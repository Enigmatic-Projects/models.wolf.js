export default interface ISubscriberExtended {
    name?: string;
    about?: string;
    gender?: number;
    lookingFor?: number;
    relationship?: number;
    language?: number;
    urls?: string[];
    dateOfBirth?: string;
    utcOffset: number;
}