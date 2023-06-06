import { FeedbackPayloadStructure, UiStructure } from "../../types";
import {
  hideLoadingActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showLoading reducer", () => {
  describe("When it receives an UI state and a showLoading action", () => {
    test("Then it should toogle the isLoading property to true", () => {
      const currentUiState: UiStructure = {
        isLoading: false,
      };
      const expectedState: UiStructure = {
        isLoading: true,
      };

      const newState = uiReducer(currentUiState, showLoadingActionCreator());

      expect(newState).toStrictEqual(expectedState);
    });
  });
});

describe("Given a hiddeLoading reducer", () => {
  describe("When it receives an UI state and a hideLoading action", () => {
    test("Then it should toogle the isLoading property to false", () => {
      const currentUiState: UiStructure = {
        isLoading: true,
      };
      const expectedState: UiStructure = {
        isLoading: false,
      };

      const newState = uiReducer(currentUiState, hideLoadingActionCreator());

      expect(newState).toStrictEqual(expectedState);
    });
  });
});

describe("Given a showFeedback reducer", () => {
  describe("When it receives an UI state and a showFeedback action as payload", () => {
    test("Then it should toogle the showFeedback statte to true", () => {
      const currentUiState: UiStructure = {
        showFeedback: false,
        isError: false,
        message: "",
      };
      const expectedUiState: UiStructure = {
        showFeedback: true,
        isError: true,
        message: "Wrong credentials",
      };
      const payload: FeedbackPayloadStructure = {
        isError: true,
        message: "Wrong credentials",
      };

      const newUiState = uiReducer(
        currentUiState,
        showFeedbackActionCreator(payload)
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
