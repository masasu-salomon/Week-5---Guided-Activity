import { useState } from "react";
import type { FormEvent } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import {
  increment,
  decrement,
  reset,
  setValue,
} from "../store/actions/counterActions";
import styles from "./Counter.module.css";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [customValue, setCustomValue] = useState("");

  const handleSetValue = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = Number(customValue);
    if (customValue.trim() === "" || Number.isNaN(value)) return;
    dispatch(setValue(value));
    setCustomValue("");
  };

  return (
    <div className={styles.counterContainer}>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <form className={styles.setValueForm} onSubmit={handleSetValue}>
        <input
          type="number"
          value={customValue}
          onChange={(event) => setCustomValue(event.target.value)}
          placeholder="Custom value"
          aria-label="Custom counter value"
        />
        <button type="submit">Set</button>
      </form>
    </div>
  );
};

export default Counter;
