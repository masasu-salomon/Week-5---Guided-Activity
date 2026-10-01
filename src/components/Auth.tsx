import { useState } from "react";
import type { FormEvent } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { login, logout } from "../store/actions/authActions";
import styles from "./Auth.module.css";

const Auth = () => {
  const { isAuthenticated, username } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [nameInput, setNameInput] = useState("");

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = nameInput.trim();
    if (!name) return;
    dispatch(login(name));
    setNameInput("");
  };

  return (
    <div className={styles.authContainer}>
      {isAuthenticated ? (
        <>
          <p>
            Logged in as <strong>{username}</strong>
          </p>
          <button onClick={() => dispatch(logout())}>Log out</button>
        </>
      ) : (
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <input
            type="text"
            value={nameInput}
            onChange={(event) => setNameInput(event.target.value)}
            placeholder="Username"
            aria-label="Username"
          />
          <button type="submit">Log in</button>
        </form>
      )}
    </div>
  );
};

export default Auth;
