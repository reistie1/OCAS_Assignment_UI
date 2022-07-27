import { DATATYPES, Save_School_Id } from './Types';

export var initialState = {schoolId: ''};

export function DataReducer(state = initialState, action: Save_School_Id) {

  switch (action.type) {

    case DATATYPES.SAVE_SCHOOL_ID: {
      return { ...state, schoolId: action.payload };
    }
  }
}
