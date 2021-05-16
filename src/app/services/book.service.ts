import { Injectable } from '@angular/core';
import { Book } from '../shared/book';
import { BOOKS } from '../shared/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Book[] {
    return BOOKS;
  }

  getBook(id: string): Book {
    return BOOKS.filter((book) => (book.id === id))[0];
  }

  getFeaturedBook(): Book {
    return BOOKS.filter((book) => book.featured)[0];
  }
}
