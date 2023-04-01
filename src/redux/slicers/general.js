// @flow
import _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import Immutable from "seamless-immutable";

const GeneralReducer = createSlice({
  name: "general",
  initialState: Immutable({
    data: "",
  }),
  reducers: {
    storeSummarry(state, action) {
      state.data = action.payload;
    },
  },
});

export const { storeSummarry } = GeneralReducer.actions;

export default GeneralReducer.reducer;
