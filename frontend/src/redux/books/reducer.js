import * as actionTypes from './actionTypes';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payload];
    case actionTypes.DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case actionTypes.TOGGLE_FAVORITE:
      return state.map((book) => {
        if (book.id === action.payload.id) {
          return { ...book, isFavorite: !book.isFavorite };
        } else {
          return book;
        }
      });
    default:
      return state;
  }
};

export default booksReducer;
