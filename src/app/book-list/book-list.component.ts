import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  book_list: any[];
  author = '';

  constructor(
    private _bookDataService: BookDataService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.book_list = this._route.snapshot.data['book_list'];
    this.author = this._route.snapshot.queryParams['author'];
  }

  filterBook(author: string) {
    this._router.navigate(['/booklist'], { queryParams: { author: author}  })
      .then(() => window.location.reload());
  }
}
