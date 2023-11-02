import { useSelector } from 'react-redux';
import './BookList.css';

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <div className="app-block book-list">
      <h2>Список книг</h2>
      {books.length === 0 ? (
        <p>Нет доступных книг</p>
      ) : (
        <ul>
          {books.map((book, i) => {
            return (
              <li key={i}>
                <div className="book-info">
                  {++i}. Название: <strong>{book.title}</strong>, Автор:{' '}
                  <strong>{book.author}</strong>
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
