import { Injectable } from '@angular/core';
import { Book } from '../shared/book';
import { BOOKS } from '../shared/books';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Observable<Book[]> {
    return of(BOOKS).pipe(delay(2000));
  }

  getBook(id: string):Observable<Book> {
    return of(BOOKS.filter((book) => (book.id === id))[0]).pipe(delay(2000));
  }

    
  getFeaturedBook(): Observable<Book> {
    return of(BOOKS.filter((book) => book.featured)[0]).pipe(delay(2000));
  }
}
