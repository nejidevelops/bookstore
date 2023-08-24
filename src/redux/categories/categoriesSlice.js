import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfCategories: [],
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { updateStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
