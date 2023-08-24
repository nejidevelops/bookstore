import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

function Book({ title, author, category, item_id }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(item_id));
  };

  return (
    <div className="book">
      <ul>
        <li>{author}</li>
        <li>{title}</li>
        <li>{category}</li>
      </ul>
      <button type="button" className="remove" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
};

export default Book;
