import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Pre-typed versions of the react-redux hooks so components don't need
// to annotate RootState and AppDispatch every time.
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
