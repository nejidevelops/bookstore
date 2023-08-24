import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfBooks: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.numOfBooks = state.numOfBooks.concat(action.payload);
    },

    removeBook: (state, action) => {
      state.numOfBooks = state.numOfBooks.filter((book) => book !== action.payload);
    },
  },
});

export default bookSlice.reducer;
export const { addBook, removeBook } = bookSlice.actions;
