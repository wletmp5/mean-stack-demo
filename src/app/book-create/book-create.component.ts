import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BookService} from '../service/book.service';
import {Book} from '../model/book';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {

  book: Book = new Book();

  constructor(
    private http: HttpClient,
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit() {
  }

  saveBook() {
    this.bookService.save(this.book).subscribe(
      res => {
        const isdn = res['isdn'];
        this.router.navigate(['/book-details', isdn]);
      },
      err => {
        console.log(err);
      }
    );
  }

}

