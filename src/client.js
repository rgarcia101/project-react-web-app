import axios from 'axios';

export const BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';
//const API_KEY = "AIzaSyCx1cfMAdyB_HVCTNS3gQmsEcmSNBoB2wg";  // Bad practice to have hard coded
export const API_KEY = process.env.REACT_APP_BOOK_API_KEY; // TODO:NEED TO FIX - THIS IS NOT WORKING NOW

export const findBooks = async (searchTerm) => {
  const response = await axios.get(`${BOOKS_API}?q=${searchTerm}&key=${API_KEY}`);
  return response.data.items;
  // return response.data.items.map((item) => item.volumeInfo);
};

export const findBookById = async (bookId) => {
  const response = await axios.get(
    `${BOOKS_API}/${bookId}?key=${API_KEY}`
  );
  return response.data.volumeInfo;
}