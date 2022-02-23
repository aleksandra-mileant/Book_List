import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { editBook, getBooks } from '../../api/books';

const initialValues: Book = {
  title: '',
  author: '',
  category: '',
};

export const EditUser: React.FC = () => {
  const [book, setBook] = useState(initialValues);
  const { id } = useParams();
  const {
    title,
    author,
    category,
    ISBN,
  } = book;

  const loadBookData = async () => {
    const response = await getBooks(id);

    setBook(response.data);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  const editBookDetails = async () => {
    if (id) {
      await editBook(id, book);
    }
  };

  useEffect(() => {
    loadBookData();
  }, []);

  return (
    <div className="">
      <form className="mb-3 w-25 p-3 container shadow-lg p-3 mb-5 bg-white rounded">
        <Link type="button" className="btn-close" aria-label="Close" to="/books"></Link>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="title"
            value={title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="author"
            value={author}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="category"
            value={category}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="ISBN"
            value={ISBN}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <Link to="/books">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => editBookDetails()}
          >
            Save
          </button>
        </Link>
      </form>
    </div>
  );
};
