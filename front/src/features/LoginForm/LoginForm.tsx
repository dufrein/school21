"use client";

import React, { useActionState, useState } from "react";
import styles from "./styles.module.scss";
import { login } from "./helpers/login";
import { ROUTES } from "@constants";
import { NavLink } from "@components";

export const LoginForm: React.FC = () => {
  const [state, action, isPending] = useActionState(login, undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className={styles.form} action={action}>
      <div className={styles.formGroup}>
        <label className={"input-label"}>Email</label>
        <input
          type="email"
          name="email"
          className={"input"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
        />
        {state?.errors?.email && <p className={"input-error"}>{state.errors.email}</p>}
      </div>
      <div className={styles.formGroup}>
        <label className={"input-label"}>Пароль</label>
        <input
          type="password"
          name="password"
          className={"input"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
        />
        {state?.errors?.password && <p className={"input-error"}>{state.errors.password}</p>}
      </div>
      <button className={"button btnPrimary"} type="submit">
        Войти
      </button>
      <NavLink className={"button btnSecondary"} href={ROUTES.SIGNUP} style={{ color: "#fff" }}>
        Зарегистрироваться
      </NavLink>
      <NavLink
        className={"button btnTetriary"}
        href={ROUTES.RESET_PASSWORD}
        style={{ color: "#fff" }}
      >
        Забыли пароль?
      </NavLink>
    </form>
  );
};
