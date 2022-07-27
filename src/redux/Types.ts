import { Action } from "@ngrx/store";

export enum DATATYPES {
  SAVE_SCHOOL_ID = 'SAVE_SCHOOL_ID'
}

export class Save_School_Id implements Action {
  readonly type = DATATYPES.SAVE_SCHOOL_ID;
  constructor(public payload: string){}
}
