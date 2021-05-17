import { Injectable } from '@angular/core';
import { Author } from '../shared/author';
import { AUTHORS } from '../shared/authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  getAuthors(): Promise<Author[]> {
    return Promise.resolve(AUTHORS);
  }

  getAuthor(id: string): Promise<Author> {
    return Promise.resolve(AUTHORS.filter((author) => (author.id === id))[0]);
  }

  getFeaturedAuthor(): Promise<Author> {
    return Promise.resolve(AUTHORS.filter((author) => author.featured)[0]);
  }

}
