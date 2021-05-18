import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from '../shared/book';
import { BookService } from '../services/book.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookdetailComponent implements OnInit {

  book: Book;
  errMess: string;
  bookIds: string[];
  prev: string;
  next: string;
  commentForm: FormGroup;
  comment: Comment;
  @ViewChild('fform') commentFormDirective;

  formErrors = {
    'author': '',
    'comment': '',
    'rating': ''
  };

  validationMessages = {
    'author': {
      'required': "Author Name is required",
      'minlength': "Name must be at least 2 characters long",
      'maxlength': "Name cannot be more than 25 characters"
    },
    'comment': {
      'required': "Comment is required"
    }

  };

  constructor(private bookService: BookService,  private route: ActivatedRoute,private location: Location, private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit() {
    this.createForm();

    this.bookService.getBookIds().subscribe(bookIds => this.bookIds = bookIds);
    this.route.params.pipe(switchMap((params: Params) => this.bookService.getBook(params['id'])))
    .subscribe(book => { this.book = book; this.setPrevNext(book.id); },
    errmess => this.errMess = <any>errmess);
  }

  createForm() {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating: ['', Validators.required],
      comment: ['', [Validators.required]]
    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if(!this.commentForm) {return;}
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if(this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.comment = this.commentForm.value;
    // console.log(this.comment);

    var d = new Date();
    var date = d.toISOString();

    var pushArray = {'rating': this.comment.rating, 'author': this.comment.author, 'date': date, 'comment': this.comment.comment}

    this.book.comments.push(pushArray);

    this.commentForm.reset({
      author: '',
      rating: '5',
      comment: ''
    });
    this.commentFormDirective.resetForm();
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
