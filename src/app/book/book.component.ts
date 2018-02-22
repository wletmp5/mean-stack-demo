import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.bookService.find().subscribe(
      data => { this.books = data; },
      err => {
        if (err.status === 401) {
              this.router.navigate(['login']);
        }
      });
  }

}
