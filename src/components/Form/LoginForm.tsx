import React, { useState } from "react";
import FormStyled from "./FormStyled";
import { UserCredentials } from "../../types";

const LoginForm = (): React.ReactElement => {
  const initialUserCredentials: UserCredentials = {
    username: "",
    password: "",
  };

  const [userCredentialsState, setUserCredentialsState] =
    useState<UserCredentials>(initialUserCredentials);

  const onChangeUserInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentialsState({
      ...userCredentialsState,
      [event.target.id]: event.target.value,
    });
  };

  const isEnable =
    userCredentialsState.username !== "" &&
    userCredentialsState.password !== "";

  return (
    <FormStyled className="login-form">
      <div className="login-form__controls">
        <label className="login-form__label" htmlFor="username">
          Username:
        </label>
        <input
          className="login-form__input"
          id="username"
          type="text"
          onChange={onChangeUserInputs}
          placeholder="Enter your username"
          value={userCredentialsState.username}
        />
      </div>
      <div className="login-form__controls">
        <label className="login-form__label" htmlFor="password">
          Password:
        </label>
        <input
          className="login-form__input"
          id="password"
          type="password"
          onChange={onChangeUserInputs}
          placeholder="Enter your password"
          value={userCredentialsState.password}
        />
      </div>
      <button className="login-form__button" type="submit" disabled={!isEnable}>
        Login
      </button>
    </FormStyled>
  );
};

export default LoginForm;
