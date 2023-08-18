import React from 'react';

function AddBook() {
  return (
    <form>
      <h4>Add New Book</h4>
      <input
        type="text"
        placeholder="Add Book Title ..."
        name="title"
        className="bookTitle"
      />
      <input
        type="text"
        placeholder="Add Author Name"
        name="author"
        className="authorName"
      />
      <button type="submit" className="addBook">
        Add Book
      </button>
    </form>
  );
}

export default AddBook;
