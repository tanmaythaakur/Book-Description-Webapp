import { Injectable } from '@angular/core';
import { Book } from '../shared/book';
import { BOOKS } from '../shared/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Promise<Book[]> {
    return Promise.resolve(BOOKS);
  }

  getBook(id: string): Promise<Book> {
    return Promise.resolve(BOOKS.filter((book) => (book.id === id))[0]);
  }

  getFeaturedBook(): Promise<Book> {
    return Promise.resolve(BOOKS.filter((book) => book.featured)[0]);
  }
}
