import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from '../shared/book';
import { BookService } from '../services/book.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookdetailComponent implements OnInit {

  book: Book;
  bookIds: string[];
  prev: string;
  next: string;

  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.bookService.getBookIds().subscribe(bookIds => this.bookIds = bookIds);
    this.route.params.pipe(switchMap((params: Params) => this.bookService.getBook(params['id'])))
    .subscribe(book => { this.book = book; this.setPrevNext(book.id); });
  }

  setPrevNext(bookId: string) {
    const index = this.bookIds.indexOf(bookId);
    this.prev = this.bookIds[(this.bookIds.length + index - 1) % this.bookIds.length];
    this.next = this.bookIds[(this.bookIds.length + index + 1) % this.bookIds.length];
  }

  goBack(): void {
    this.location.back();
  }

}
