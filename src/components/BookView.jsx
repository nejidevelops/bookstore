/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const bookList = () => {
  const books = useSelector((state) => state.book.numOfBooks);

  return (
    <div>
      <h2>Book List</h2>
      <ul className="books">
        {books.map((book) => (
          <Book
            key={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
            item_id={book.item_id}
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default bookList;
