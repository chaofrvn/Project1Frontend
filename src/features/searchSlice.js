import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  search: "",
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    reset: (state) => initialState,
    update: (state, action) => {
      state.search = action.payload;
    },
  },
});
export const { reset, update } = searchSlice.actions;
export default searchSlice.reducer;
