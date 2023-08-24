import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook({
        title,
        author,
        category: 'Fiction',
        item_id: Date.now().toString(),
      }));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add New Book</h4>
      <input
        type="text"
        placeholder="Add Book Title ..."
        name="title"
        className="bookTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add Author Name"
        name="author"
        className="authorName"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit" className="addBook">
        Add Book
      </button>
    </form>
  );
}

export default AddBook;
