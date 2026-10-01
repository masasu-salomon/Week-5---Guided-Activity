export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const SET_VALUE = "SET_VALUE";

export interface IncrementAction {
  type: typeof INCREMENT;
}

export interface DecrementAction {
  type: typeof DECREMENT;
}

export interface ResetAction {
  type: typeof RESET;
}

export interface SetValueAction {
  type: typeof SET_VALUE;
  payload: number;
}

export type CounterAction =
  | IncrementAction
  | DecrementAction
  | ResetAction
  | SetValueAction;

export const increment = (): IncrementAction => ({ type: INCREMENT });
export const decrement = (): DecrementAction => ({ type: DECREMENT });
export const reset = (): ResetAction => ({ type: RESET });
export const setValue = (value: number): SetValueAction => ({
  type: SET_VALUE,
  payload: value,
});
