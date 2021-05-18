import { Injectable } from '@angular/core';
import { Book } from '../shared/book';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBookIds(): Observable<string[] | any> {
    return this.getBooks().pipe(map(books => books.map(book => book.id)));
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(baseURL + 'books');
  }

  getBook(id: string):Observable<Book> {
    return this.http.get<Book>(baseURL + 'books/' + id);
  }

    
  getFeaturedBook(): Observable<Book> {
    return this.http.get<Book[]>(baseURL + 'books/?featured=true')
    .pipe(map(books => books[0]));
  }
}
