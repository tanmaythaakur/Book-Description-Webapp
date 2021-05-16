import { Injectable } from '@angular/core';
import { Author } from '../shared/author';
import { AUTHORS } from '../shared/authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  getAuthors(): Author[] {
    return AUTHORS;
  }

  getAuthor(id: string): Author {
    return AUTHORS.filter((author) => (author.id === id))[0];
  }

  getFeaturedAuthor(): Author {
    return AUTHORS.filter((author) => author.featured)[0];
  }
}
