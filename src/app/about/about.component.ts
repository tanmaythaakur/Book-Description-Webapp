import { Component, OnInit, Inject } from '@angular/core';
import { Author } from '../shared/author';
import { AuthorService } from '../services/author.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {

  authors: Author[];
  errMess: string;

  selectedAuthor: Author;

  constructor(private authorService: AuthorService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.authorService.getAuthors()
    .subscribe(authors => this.authors = authors,
      errmess => this.errMess = <any>errmess);
  }

  onSelect(author: Author) {
    this.selectedAuthor = author;
  }
}
