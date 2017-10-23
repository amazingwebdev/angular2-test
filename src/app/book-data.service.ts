import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ActivatedRoute, Params} from '@angular/router';

import { environment } from '../environments/environment';
import { Book } from './book';

@Injectable()
export class BookDataService {

  constructor(
    private _http: Http,
    private _route: ActivatedRoute,
  ) { }

  getAllBook(author: string): Observable<any[]> {
    return this._http.get(environment.static_url + '/book?author=' + author)
      .map(response => response.json());
  }

  addBook(book: Book): Observable<Book> {
    return this._http.post(environment.static_url + '/book', book)
      .map(res => res.json());
  }

  getSearchList(author: string): Observable<any[]> {
    return this._http.get(environment.static_url + `/search/${author}`)
      .map(res => res.json());
  }

}
