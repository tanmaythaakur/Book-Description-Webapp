import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookService } from '../services/book.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { AuthorService } from '../services/author.service';
import { Author } from '../shared/author';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  book: Book;
  promotion: Promotion;
  author: Author;
  constructor(private bookService: BookService, private promotionService: PromotionService, private authorService: AuthorService) { }

  ngOnInit() {
    this.bookService.getFeaturedBook()
    .subscribe(book => this.book = book);
    this.promotionService.getFeaturedPromotion()
    .subscribe(promotion => this.promotion = promotion);
    this.authorService.getFeaturedAuthor()
    .subscribe(author => this.author = author);
  }

}
