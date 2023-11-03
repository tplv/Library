import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../../redux/books/actionCreators';
import './BookList.css';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(actionCreators.deleteBook(id));
  };

  return (
    <div className="app-block book-list">
      <h2>Список книг</h2>
      {books.length === 0 ? (
        <p>Нет доступных книг</p>
      ) : (
        <ul>
          {books.map((book, i) => {
            return (
              <li key={book.id}>
                <div className="book-info">
                  {++i}. Название: <strong>{book.title}</strong>, Автор:{' '}
                  <strong>{book.author}</strong>
                </div>
                <div className="book-actions">
                  <button
                    onClick={() => {
                      handleDelete(book.id);
                    }}
                  >
                    Удалить
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default BookList;
