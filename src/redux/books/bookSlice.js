import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfBooks: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.numOfBooks = state.numOfBooks.concat(action.payload);
    },

    removeBook: (state, action) => {
      state.numOfBooks = state.numOfBooks.filter((book) => book.item_id !== action.payload);
    },
  },
});

export default bookSlice.reducer;
export const { addBook, removeBook } = bookSlice.actions;
