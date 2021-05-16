import { Component, OnInit } from '@angular/core';
import { Author } from '../shared/author';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  authors: Author[];

  selectedAuthor: Author;

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.authors = this.authorService.getAuthors();
  }

  onSelect(author: Author) {
    this.selectedAuthor = author;
  }
}
