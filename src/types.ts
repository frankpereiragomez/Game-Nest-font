import React from "react";

export interface VideogameState {
  videogames: VideogamesDataStructure[];
  videogameId?: VideogamesStructure;
}

export interface VideogameStateResponse extends VideogameState {
  totalVideogames: number;
}

export interface UserTokenStructure {
  id: string;
  name: string;
  token: string;
}

export interface UserStateStructure extends UserTokenStructure {
  isLogged: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface LoginFormStructure {
  submitForm: (user: UserCredentials) => void;
}

export interface VideogamesStructure {
  name: string;
  image: string;
  genre: string;
  developers: string;
  price: number;
  description: string;
  user?: string;
}

export interface VideogamesDataStructure extends VideogamesStructure {
  id: string;
}

export interface ButtonStructure {
  text?: string;
  className?: string;
  alt?: string;
  actionOnClick?: () => void;
  icon?: string;
  width?: string;
  height?: string;
  ariaLabel?: string;
  isDisabled?: boolean;
  children?: React.ReactElement;
  type?: "button" | "submit" | "reset" | undefined;
}
export interface UiStructure {
  isLoading?: boolean;
  message?: string;
  isError?: boolean;
  showFeedback?: boolean;
}

export interface FeedbackPayloadStructure {
  isError: boolean;
  message: string;
}
