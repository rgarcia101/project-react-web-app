import axios from 'axios';
const request = axios.create({
  withCredentials: true,
});
export const BASE_API = "http://localhost:4000/api";
export const BOOKS_API = `${BASE_API}/books`;
export const BOOKSHELF_API = `${BASE_API}/bookshelfItems`;

export const saveBook = async (book) => {
  const response = await axios.post(`${BOOKS_API}`,
    book);
  return response.data;
};


export const saveBookshelfItem = async (userId, bookId) => {
  const response = await axios.post(`${BOOKSHELF_API}/users/${userId}`, {
    userId: userId,
    bookId: bookId,
  });
  return response.data;
};

export const findAllBooksByApiId = async (apiId) => {
  const response = await axios.get(`${BOOKS_API}/api/${apiId}`);
  return response.data;
};