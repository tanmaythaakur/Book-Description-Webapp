import { Injectable } from '@angular/core';
import { Author } from '../shared/author';
import { AUTHORS } from '../shared/authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  getAuthors(): Promise<Author[]> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(AUTHORS), 2000);
    });
  }

  getAuthor(id: string): Promise<Author> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(AUTHORS.filter((author) => (author.id === id))[0]), 2000);
    });
  }

  getFeaturedAuthor(): Promise<Author> {
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(AUTHORS.filter((author) => author.featured)[0]), 2000);
    });
  }

}
