import React from "react";
import FormStyled from "./FormStyled";

const LoginForm = (): React.ReactElement => {
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
          placeholder="Enter your username"
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
          placeholder="Enter your password"
        />
      </div>
      <button className="login-form__button">Login</button>
    </FormStyled>
  );
};

export default LoginForm;
