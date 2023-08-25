import React from 'react';
import BookLists from '../components/BookItem';
import AddBook from '../components/BookData';

const Home = () => (
  <div className="container">
    <div>
      <BookLists />
    </div>
    <div>
      <h2>ADD A NEW BOOK</h2>
      <AddBook />
    </div>
  </div>
);

export default Home;
