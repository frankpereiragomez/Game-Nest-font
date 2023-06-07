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
    deleteVideogame: (
      currentVideogame: VideogameState,
      action: PayloadAction<string>
    ): VideogameState => ({
      ...currentVideogame,
      videogames: currentVideogame.videogames.filter(
        (videogame) => videogame.id !== action.payload
      ),
    }),
  },
});

export const {
  loadVideogames: loadVideogamesActionCreator,
  deleteVideogame: deleteVideogameActionCreator,
} = videogameSlice.actions;
export const videogameReducer = videogameSlice.reducer;
