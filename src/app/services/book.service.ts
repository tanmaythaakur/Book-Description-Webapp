import { Injectable } from '@angular/core';
import { Book } from '../shared/book';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getBookIds(): Observable<string[] | any> {
    return this.getBooks().pipe(map(books => books.map(book => book.id))).pipe(catchError(error => error));
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(baseURL + 'books').pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getBook(id: string):Observable<Book> {
    return this.http.get<Book>(baseURL + 'books/' + id).pipe(catchError(this.processHTTPMsgService.handleError));
  }

    
  getFeaturedBook(): Observable<Book> {
    return this.http.get<Book[]>(baseURL + 'books/?featured=true')
    .pipe(map(books => books[0])).pipe(catchError(this.processHTTPMsgService.handleError));
  }

  putBook(book: Book): Observable<Book> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put<Book>(baseURL + 'books/' + book.id, book, httpOptions)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
