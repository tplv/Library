import { useState } from 'react';
import './BookForm.css';
import { useDispatch } from 'react-redux';
import * as actionCreators from '..//../redux/books/actionCreators';
import { v4 as uuid } from 'uuid';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      const newBook = {
        title,
        author,
        id: uuid(),
      };
      dispatch(actionCreators.addBook(newBook));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="app-block book-form">
      <h2>Добавление книги</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Название: </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="author">Автор: </label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <button type="submit">Добавить книгу</button>
      </form>
    </div>
  );
}

export default BookForm;
