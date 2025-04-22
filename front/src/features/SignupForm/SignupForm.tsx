"use client";

import React, { useActionState, useState } from "react";
import styles from "./styles.module.scss";
import { signup } from "./helpers/signup";

/**
 * Форма для регистрации пользователя
 * @returns React.FC
 */
export const SignupForm: React.FC = () => {
  const [state, action] = useActionState(signup, undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const errors = state?.errors;
  const isUserCreated = state?.isUserCreated;

  return (
    <form className={styles.form} action={action}>
      <div className={styles.formGroup}>
        <label className={'input-label'}>Email</label>
        <input
          type="email"
          name="email"
          className={'input'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isUserCreated}
        />
        {errors?.email && <p className={'input-error'}>{errors?.email}</p>}
      </div>
      <div className={styles.formGroup}>
        <label className={'input-label'}>Имя</label>
        <input
          type="text"
          name="name"
          className={'input'}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isUserCreated}
        />
        {errors?.name && <p className={'input-error'}>{errors?.name}</p>}
      </div>
      <div className={styles.formGroup}>
        <label className={'input-label'}>Фамилия</label>
        <input
          type="text"
          name="surname"
          className={'input'}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          disabled={isUserCreated}
        />
        {errors?.surname && <p className={'input-error'}>{errors?.surname}</p>}
      </div>
      <div className={styles.formGroup}>
        <label className={'input-label'}>Пароль</label>
        <input
          type="password"
          name="password"
          className={'input'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isUserCreated}
        />
        {state?.errors?.password && (
          <div className={'input-error'}>
            <p>Пароль должен соответствовать правилам:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {!errors && isUserCreated && (
        <p>На вашу почту {email} выслана ссылка для окончания регистрации, перейдите по ней</p>
      )}
      <button
        className={`button btnPrimary${isUserCreated ? " btnDisabled" : ""}`}
        type="submit"
        disabled={isUserCreated}
      >
        Зарегистрироваться
      </button>
      <button className={"button btnSecondary"} formAction="/login">
        Войти
      </button>
    </form>
  );
};
