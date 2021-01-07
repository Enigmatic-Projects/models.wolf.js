export default interface IGroupExtended {
  id: number;
  discoverable: boolean;
  advancedAdmin: boolean;
  locked: boolean;
  questionable: boolean;
  entryLevel: number;
  passworded: boolean;
  language: number;
  longDescription: string;
  category: number;
}
