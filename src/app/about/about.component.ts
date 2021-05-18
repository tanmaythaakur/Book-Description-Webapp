import { Component, OnInit } from '@angular/core';
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

  selectedAuthor: Author;

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.authorService.getAuthors()
    .subscribe((authors => this.authors = authors));
  }

  onSelect(author: Author) {
    this.selectedAuthor = author;
  }
}
