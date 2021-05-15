import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BOOKS } from '../shared/books';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {

  books: Book[] = BOOKS;
  selectedBook: Book;

  constructor() { }

  ngOnInit() {
  }

  onSelect(book: Book) {
    this.selectedBook = book;
  }

}

/*

.


*/