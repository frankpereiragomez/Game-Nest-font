import {
  UserCredentials,
  UserStateStructure,
  UserTokenStructure,
} from "../types";

export const currentUserState: UserStateStructure = {
  id: "",
  name: "",
  token: "",
  isLogged: false,
};

export const expectedNewUserState: UserStateStructure = {
  id: "123",
  isLogged: true,
  name: "Link",
  token: "J.J.Token",
};

export const userToken: UserTokenStructure = {
  id: "123",
  name: "Link",
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
};

export const token = "J.J.Token";

export const realTokenMock: UserTokenStructure = {
  id: "646fa078f583d0a4152044a8",
  name: "Admin",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmYTA3OGY1ODNkMGE0MTUyMDQ0YTgiLCJuYW1lIjoiQWRtaW4iLCJpYXQiOjE2ODU1NTk0NDUsImV4cCI6MTY4NjE2NDI0NX0.Yxpnn8RFqIa4P0hQwGrjLr_cUAAqTSQfrZL2T7L1Hvk",
};
