import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import logger from "redux-logger";
import { loadState, saveState } from "./localStorage";

type PersistedState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  loadState<PersistedState>(),
  applyMiddleware(logger)
);

// Save the latest state so it survives page reloads.
store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
