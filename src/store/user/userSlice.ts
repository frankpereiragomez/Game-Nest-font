import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserStateStructure, UserTokenStructure } from "../../types";
import { currentUserState } from "../../mocks/mockUser";

const userSlice = createSlice({
  name: "user",
  initialState: currentUserState,
  reducers: {
    loginUser: (
      _currentUser: UserStateStructure,
      action: PayloadAction<UserTokenStructure>
    ): UserStateStructure => ({
      ...action.payload,
      isLogged: true,
    }),
    logoutUser: (): UserStateStructure => ({
      ...currentUserState,
    }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutActionCreator,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
