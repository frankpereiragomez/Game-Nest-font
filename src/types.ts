export interface UserTokenStructure {
  id: string;
  name: string;
  username: string;
  token: string;
}

export interface UserStateStructure extends UserTokenStructure {
  isLogged: boolean;
}
