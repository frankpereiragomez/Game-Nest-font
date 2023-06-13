import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  VideogameState,
  VideogamesDataStructure,
  VideogamesStructure,
} from "../../types";

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
    createVideogame: (
      currentVideogame: VideogameState,
      action: PayloadAction<VideogamesDataStructure>
    ): VideogameState => ({
      ...currentVideogame,
      videogames: [...currentVideogame.videogames, action.payload],
    }),
    loadSelectedVideogame: (
      currentVideogame: VideogameState,
      action: PayloadAction<VideogamesStructure>
    ): VideogameState => ({
      ...currentVideogame,
      videogameById: action.payload,
    }),
  },
});

export const {
  loadVideogames: loadVideogamesActionCreator,
  deleteVideogame: deleteVideogameActionCreator,
  createVideogame: createVideogameActionCreator,
  loadSelectedVideogame: loadSelectedVideogameActionCreator,
} = videogameSlice.actions;
export const videogameReducer = videogameSlice.reducer;
