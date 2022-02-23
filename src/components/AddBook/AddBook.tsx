import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addBook } from '../../api/books';
import './AddBook.scss';

const initialValues: Book = {
  title: '',
  author: '',
  category: '',
  ISBN: '',
};

export const AddBook: React.FC = () => {
  const [book, setBook] = useState(initialValues);
  const {
    title,
    author,
    category,
    ISBN,
  } = book;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement
  | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  const clearInput = () => {
    setBook(initialValues);
  };

  const addBookDetails = async () => {
    await addBook(book);
    clearInput();
  };

  return (
    <form
      className="mb-3 w-25 p-3 container shadow-lg p-3 mb-5 bg-white rounded left"
    >
      <Link
        type="button"
        className="btn-close"
        aria-label="Close"
        to="/books"
      />
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Write a title of the book"
          name="title"
          value={title}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="validationCustomUsername"
          placeholder="Write a author of the book"
          name="author"
          value={author}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="mb-3">
        <div className="col-md-4">
          <select
            id="inputState"
            className="form-select"
            onChange={handleChange}
            value={category}
            name="category"
          >
            <option selected>Category...</option>
            <option value="Crime">Crime</option>
            <option value="Adventure">Adventure</option>
            <option value="Romance">Romance</option>
            <option value="Classic">Classic</option>
            <option value="Science fiction">Science Fiction</option>
            <option value="Horror">Horror</option>
          </select>
        </div>
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Write a ISBN of the book"
          name="ISBN"
          value={ISBN}
          onChange={(e) => handleChange(e)}
        />
      </div>
      {title && author && ISBN && category
        ? (
          <Link to="/books">
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => addBookDetails()}
            >
              Add a book
            </button>
          </Link>
        )

        : (
          <button
            type="button"
            className="btn btn-outline-success"
            disabled
          >
            Add a book
          </button>
        )}
    </form>
  );
};
