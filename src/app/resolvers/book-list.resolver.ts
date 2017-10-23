import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { BookDataService } from '../book-data.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BookListResolver implements Resolve<any> {
  constructor(
    private _bookDataService: BookDataService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any[]> {
    if (route.queryParams['author']) {
      return this._bookDataService.getAllBook(route.queryParams['author']);
    } else {
      return this._bookDataService.getAllBook('');
    }
  }
}
