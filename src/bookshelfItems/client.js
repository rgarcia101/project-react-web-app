import axios from 'axios';
const request = axios.create({
  withCredentials: true,
});
export const BASE_API = "http://localhost:4000/api";
export const BOOKSHELF_API = `${BASE_API}/bookshelfItems`;

export const saveBookshelfItem = async (userId, bookId) => {
  const response = await axios.post(`${BOOKSHELF_API}/users/${userId}`, {
    userId: userId,
    bookId: bookId,
  });
  return response.data;
};