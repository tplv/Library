import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../../redux/books/actionCreators';
import './BookList.css';
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs';
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from '../../redux/slices/filterSlice';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavorite = useSelector(selectOnlyFavoriteFilter);

  const handleDelete = (id) => {
    dispatch(actionCreators.deleteBook(id));
  };

  const handleFavorite = (id) => {
    dispatch(actionCreators.toggleFavorite(id));
  };

  const highlightMatch = (text, filter) => {
    const regex = new RegExp(`(${filter})`, 'gi');
    if (!filter) return text;
    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substring}
          </span>
        );
      }
      return substring;
    });
  };

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase());
    const matchesFavorite = onlyFavorite ? book.isFavorite : true;
    return matchesTitle && matchesAuthor && matchesFavorite;
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
                  {++i}. Название:{' '}
                  <strong>{highlightMatch(book.title, titleFilter)}</strong>,
                  Автор:{' '}
                  <strong>{highlightMatch(book.author, authorFilter)}</strong>
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
