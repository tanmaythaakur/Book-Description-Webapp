import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookService } from '../services/book.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  book: Book;
  promotion: Promotion;
  constructor(private bookService: BookService, private promotionService: PromotionService) { }

  ngOnInit() {
    this.book = this.bookService.getFeaturedBook();
    this.promotion = this.promotionService.getFeaturedPromotion();
  }

}
