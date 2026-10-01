import type { UnknownAction } from "redux";
import { LOGIN, LOGOUT } from "../actions/authActions";
import type { AuthAction, LoginAction } from "../actions/authActions";

export interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  username: null,
};

export const authReducer = (
  state: AuthState = initialState,
  action: AuthAction | UnknownAction
): AuthState => {
  switch (action.type) {
    case LOGIN:
      return { isAuthenticated: true, username: (action as LoginAction).payload };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
