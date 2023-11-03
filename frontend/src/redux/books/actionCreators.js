import { ADD_BOOK, DELETE_BOOK, TOGGLE_FAVORITE } from './actionTypes';

export function addBook(newBook) {
  return {
    type: ADD_BOOK,
    payload: newBook,
  };
}

export function deleteBook(id) {
  return {
    type: DELETE_BOOK,
    payload: {
      id,
    },
  };
}

export function toggleFavorite(id) {
  return {
    type: TOGGLE_FAVORITE,
    payload: {
      id,
    },
  };
}
