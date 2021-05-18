import { Component, OnInit, Inject } from '@angular/core';
import { Book } from '../shared/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((books) => this.books = books);
  }

}

/*

.


*/