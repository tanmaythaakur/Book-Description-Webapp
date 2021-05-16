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
}
