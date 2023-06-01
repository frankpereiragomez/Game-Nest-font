import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserStateStructure, UserTokenStructure } from "../../types";

const initialState: UserStateStructure = {
  id: "",
  name: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (
      _currentUser: UserStateStructure,
      action: PayloadAction<UserTokenStructure>
    ): UserStateStructure => ({
      ...action.payload,
      isLogged: true,
    }),
    logoutUser: (): UserStateStructure => ({
      ...initialState,
    }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutActionCreator,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
