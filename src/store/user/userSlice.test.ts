import {
  currentUserState,
  expectedNewUserState,
  userToken,
} from "../../mocks/mockUser";
import {
  loginUserActionCreator,
  logoutActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userReducer reducer", () => {
  describe("when it receives an empty current state and a loginUser function with a user has payload", () => {
    test("Then it should return a new state with the user logged", () => {
      const newUserState = userReducer(
        currentUserState,
        loginUserActionCreator(userToken)
      );

      expect(newUserState).toStrictEqual(expectedNewUserState);
    });
  });

  describe("When it call the logoutUser function", () => {
    test("Then it should return a new state with an empty user that is unlooged", () => {
      const newUserState = userReducer(
        expectedNewUserState,
        logoutActionCreator
      );

      expect(newUserState).toStrictEqual(currentUserState);
    });
  });
});
