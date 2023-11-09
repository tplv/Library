import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../../redux/books/actionCreators';
import './BookList.css';
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs';
import { selectTitleFilter } from '../../redux/slices/filterSlice';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);

  const handleDelete = (id) => {
    dispatch(actionCreators.deleteBook(id));
  };

  const handleFavorite = (id) => {
    dispatch(actionCreators.toggleFavorite(id));
  };

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    return matchesTitle;
  });

  return (
    <div className="app-block book-list">
      <h2>Список книг</h2>
      {books.length === 0 ? (
        <p>Нет доступных книг</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => {
            return (
              <li key={book.id}>
                <div className="book-info">
                  {++i}. Название: <strong>{book.title}</strong>, Автор:{' '}
                  <strong>{book.author}</strong>
                </div>
                <div className="book-actions">
                  <div
                    className="star-icon"
                    onClick={() => handleFavorite(book.id)}
                  >
                    {book.isFavorite ? (
                      <BsBookmarkStarFill />
                    ) : (
                      <BsBookmarkStar />
                    )}
                  </div>
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
