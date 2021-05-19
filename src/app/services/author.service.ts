import { Injectable } from '@angular/core';
import { Author } from '../shared/author';
import { AUTHORS } from '../shared/authors';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService ) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(baseURL + 'authors') // my service name is leadership
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(baseURL + 'authors/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedAuthor(): Observable<Author> {
    return this.http.get<Author[]>(baseURL + 'authors?featured=true')
      .pipe(map(AUTHORS => AUTHORS[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

}
