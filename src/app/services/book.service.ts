import { Injectable } from '@angular/core';
import { Book } from '../shared/book';
import { BOOKS } from '../shared/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Promise<Book[]> {
    return new Promise(resolve => {
      // Simulate 2 second delay to mimic real website
      setTimeout(() => resolve(BOOKS), 2000);
    });
  }

  getBook(id: string): Promise<Book> {
    return new Promise(resolve => {
      // Simulate 2 second delay to mimic real website
      setTimeout(() => resolve(BOOKS.filter((book) => (book.id === id))[0]), 2000);
    });
  }

    
  getFeaturedBook(): Promise<Book> {
    return new Promise(resolve => {
      // Simulate 2 second delay to mimic real website
      setTimeout(() => resolve(BOOKS.filter((book) => book.featured)[0]), 2000);
    });
  }
}
