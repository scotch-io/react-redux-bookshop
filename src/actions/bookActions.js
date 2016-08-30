import * as actionTypes from './actionTypes';

export const createBook = (book) => {
  return {
    type: actionTypes.CREATE_BOOK,
    book
  }
};
