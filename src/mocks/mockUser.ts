import {
  UserCredentials,
  UserStateStructure,
  UserTokenStructure,
} from "../types";

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

export const userCredentialsMock: UserCredentials = {
  username: "admin",
  password: "admin",
};

export const tokenMock: UserTokenStructure = {
  id: "646fa078f583d0a4152044a8",
  name: "Admin",
  token: "J.J.Token",
  username: "admin",
};

export const token = "J.J.Token";
