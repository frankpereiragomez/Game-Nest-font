import { UserStateStructure, UserTokenStructure } from "../types";

export const currentUserState: UserStateStructure = {
  id: "",
  name: "",
  username: "",
  token: "",
  isLogged: false,
};

export const expectedNewUserState: UserStateStructure = {
  id: "123",
  isLogged: true,
  name: "Link",
  username: "Zelda",
  token: "J.J.Token",
};

export const userToken: UserTokenStructure = {
  id: "123",
  name: "Link",
  username: "Zelda",
  token: "J.J.Token",
};
