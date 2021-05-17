import { Injectable } from '@angular/core';
import { Author } from '../shared/author';
import { AUTHORS } from '../shared/authors';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  getAuthors(): Observable<Author[]> {
    return of(AUTHORS).pipe(delay(2000));
  }

  getAuthor(id: string): Observable<Author> {
    return of(AUTHORS.filter((author) => (author.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedAuthor(): Observable<Author> {
    return of(AUTHORS.filter((author) => author.featured)[0]).pipe(delay(2000));
  }

}
