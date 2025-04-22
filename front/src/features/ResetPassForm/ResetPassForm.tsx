"use client";

import React, { useActionState, useState } from "react";
import styles from "./styles.module.scss";
import { resetPass } from "./helpers/resetPass";

export const ResetPassForm: React.FC = () => {
  const [state, action] = useActionState(resetPass, undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errors = state?.errors;
  const isPassReseted = state?.isPassReseted;
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
          disabled={isPassReseted}
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
          disabled={isPassReseted}
        />
        {state?.errors?.password && <p className={"input-error"}>{state.errors.password}</p>}
      </div>
      {!errors && isPassReseted && (
        <p>На вашу почту {email} выслана ссылка для окончания смены пароля, перейдите по ней</p>
      )}
      <button className={"button btnPrimary"} type="submit">
        Обновить пароль
      </button>
      <button className={"button btnSecondary"} formAction={"/signup"}>
        Зарегистрироваться
      </button>
    </form>
  );
};
