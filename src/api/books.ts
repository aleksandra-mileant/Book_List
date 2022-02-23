import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from './api';

export async function getBooks(id?: number | string) {
  const ID = id || '';
  const books = await axios.get(`${BASE_URL}/${ID}`);

  return books;
}

export async function addBook(book: Book): Promise<AxiosResponse<Albom[], Book>> {
  const newBook = await axios.post(BASE_URL, book);

  return newBook;
}

export async function editBook(id: number | string, book: Book):
Promise<AxiosResponse<Albom[], Book>> {
  const chancheDataOfBook = await axios.put(`${BASE_URL}/${id}`, book);

  return chancheDataOfBook;
}

export async function deleteBook(id: number | string): Promise<AxiosResponse<Albom[]>> {
  const bookFromServer = await axios.delete(`${BASE_URL}/${id}`);

  return bookFromServer;
}
