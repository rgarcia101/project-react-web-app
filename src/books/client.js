import axios from "axios";
const request = axios.create({
  withCredentials: true,
});

export const BASE_API = "http://localhost:4000/api";
//export const BASE_API = process.env.REACT_APP_API_BASE;
export const BOOKS_API = `${BASE_API}/books`;

// Books
export const findAllBooks = async () => {
  const response = await axios.get(`${BOOKS_API}`);
  return response.data;
};

export const updateBook = async (book) => {
  const response = await request.put(`${BOOKS_API}/${book._id}`, book);
  return response.data;
};

export const saveBook = async (book) => {
  const response = await axios.post(`${BOOKS_API}`,
      book);
  return response.data;
};
