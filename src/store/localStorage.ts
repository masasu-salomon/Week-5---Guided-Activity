const STORAGE_KEY = "reduxState";

// Reads the saved state, returning undefined so the reducers fall back
// to their initial state when nothing is stored or storage is unavailable.
export const loadState = <T>(): T | undefined => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState) as T;
  } catch {
    return undefined;
  }
};

export const saveState = <T>(state: T): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore write errors (e.g. private mode or full storage).
  }
};
