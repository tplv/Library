import { ADD_BOOK, DELETE_BOOK, TOGGLE_FAVORITE } from './actionTypes';

export function addBook(newBook) {
  return {
    type: ADD_BOOK,
    payload: newBook,
  };
}
