import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {

  book = {};

  constructor(private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['isdn']);
  }

  getBookDetail(id) {
    this.bookService.findById(id).subscribe(
      data => {
        this.book = data;
      },
      err => {
        if (err.status === 401) {
          this.router.navigate(['login']);
        }
      });
  }

  deleteBook(id) {
    this.bookService.delete(id).subscribe(
      res => {
        this.router.navigate(['/books']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
