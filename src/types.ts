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
