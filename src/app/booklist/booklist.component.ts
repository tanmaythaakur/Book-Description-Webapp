import { Component, OnInit, Inject } from '@angular/core';
import { Book } from '../shared/book';
import { BookService } from '../services/book.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class BooklistComponent implements OnInit {

  books: Book[];
  errMess: string;

  constructor(private bookService: BookService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((books) => this.books = books,
    errmess => this.errMess = <any>errmess);
  }

}

/*

.


*/