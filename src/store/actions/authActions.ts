export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export interface LoginAction {
  type: typeof LOGIN;
  payload: string;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthAction = LoginAction | LogoutAction;

export const login = (username: string): LoginAction => ({
  type: LOGIN,
  payload: username,
});
export const logout = (): LogoutAction => ({ type: LOGOUT });
