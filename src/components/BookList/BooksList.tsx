import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteBook, getBooks } from '../../api/books';

export const BooksList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const loadBooks = async () => {
    const booksFromServer = await getBooks('');

    setBooks(booksFromServer.data);
  };

  const deleteBookData = async (id: number | undefined) => {
    if (id) {
      await deleteBook(id);
      getBooks();
    }
  };

  useEffect(() => {
    loadBooks();
  }, [deleteBookData]);

  return (
    <div className="container shadow-lg p-3 mb-5 bg-white rounded">
      <table className="table table-striped table-hover container-md">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">TITLE</th>
            <th scope="col">AUTHOR</th>
            <th scope="col">CATEGORY</th>
            <th scope="col">ISBN</th>
            <th scope="col">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <th scope="row">{book.id}</th>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.ISBN}</td>
              <td>
                <Link
                  className="btn btn-outline-warning"
                  to={`/edit/${book.id}`}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-outline-danger"
                  type="button"
                  onClick={() => deleteBookData(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
