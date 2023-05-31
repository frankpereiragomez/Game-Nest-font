export interface UserTokenStructure {
  id: string;
  name: string;
  username: string;
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
