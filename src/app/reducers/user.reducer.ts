import { userData } from './root.reducer';
import { Action } from '@ngrx/store';

export enum UserActionType {
  GET_USER_ACTION = 'GET_USER_ACTION',
  GET_USER_ACTION_SUCCESS = 'GET_USER_ACTION_SUCCESS',
  GET_USER_ACTION_ERROR = 'GET_USER_ACTION_ERROR'
}

export interface UserState {
  userData: [{
    ad: {},
    data: [{
      id: null,
      email: null,
      first_name: null,
      last_name: null,
      avatar: null,
    }]
  }];

}

export const initialState: UserState = {
  userData: [{
    ad: {},
    data: [{
      id: null,
      email: null,
      first_name: null,
      last_name: null,
      avatar: null,
    }]
  }],

};

export function userReducer(state = initialState, action: UserActions) {
  const { payload } = action;

  switch (action.type) {
    case UserActionType.GET_USER_ACTION: {
      console.log(state.userData);
      return {
        ...state,
        userData: payload,
        pending: true,
      };
    }
    case UserActionType.GET_USER_ACTION_SUCCESS: {
      return {
        // ...state,
        userData: payload,
        pending: false,
        error: {
          hasError: false,
          message: '',
        }
      };
    }
    case UserActionType.GET_USER_ACTION_ERROR: {
      return {
        ...state,
        userData: {
          ...state.userData,
          pending: false,
          error: {
            hasError: true,
            message: payload
          }
        }
      };
    }
    default:
      return state.userData;
  }
}

export class getuserDataAction implements Action {
  readonly type = UserActionType.GET_USER_ACTION;
  constructor(public payload?: any) { console.log('payload', payload) }
}

export class getuserDataActionSuccess implements Action {
  readonly type = UserActionType.GET_USER_ACTION_SUCCESS;
  constructor(public payload: any) { console.log('payload', payload) }
}
export class getuserDataActionError implements Action {
  readonly type = UserActionType.GET_USER_ACTION_ERROR;
  constructor(public payload: any) { }
}

export type UserActions =
  | getuserDataAction
  | getuserDataActionSuccess
  | getuserDataActionError;
