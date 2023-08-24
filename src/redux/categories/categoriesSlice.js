import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfCategories: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    updateStatus: (state) => {
      state.status = 'Under construction';
    },
  },
});

export const { updateStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
