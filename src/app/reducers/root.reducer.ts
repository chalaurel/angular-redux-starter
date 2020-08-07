import { userReducer, UserState } from "./user.reducer";

export interface AppState {
  ad: {};
  data: {
    id: null,
    email: null,
    first_name: null,
    last_name: null,
    avatar: null;
  };
}

export const userData = (state: AppState): object => state;


export default {
  userReducer
};
