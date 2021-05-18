import { Component, OnInit, Inject } from '@angular/core';
import { Book } from '../shared/book';
import { BookService } from '../services/book.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { AuthorService } from '../services/author.service';
import { Author } from '../shared/author';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  book: Book;
  bookErrMess: string;
  promotion: Promotion;
  author: Author;
  constructor(private bookService: BookService, private promotionService: PromotionService, private authorService: AuthorService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.bookService.getFeaturedBook()
    .subscribe(book => this.book = book,
      errmess => this.bookErrMess = <any>errmess);
    this.promotionService.getFeaturedPromotion()
    .subscribe(promotion => this.promotion = promotion);
    this.authorService.getFeaturedAuthor()
    .subscribe(author => this.author = author);
  }

}
