import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { VideogamesDataStructure } from "../../types";

export interface VideogameState {
  videogames: VideogamesDataStructure[];
}

export const initialVideogameState: VideogameState = {
  videogames: [],
};

const videogameSlice = createSlice({
  name: "videogame",
  initialState: initialVideogameState,
  reducers: {
    loadVideogames: (
      currentVideogame: VideogameState,
      action: PayloadAction<VideogamesDataStructure[]>
    ): VideogameState => ({
      ...currentVideogame,
      videogames: [...action.payload],
    }),
  },
});

export const { loadVideogames: loadVideogamesActionCreator } =
  videogameSlice.actions;
export const videogameReducer = videogameSlice.reducer;
