import { Routes } from '@angular/router';

import { BookListResolver } from './resolvers/book-list.resolver';

import { BookListComponent } from './book-list/book-list.component';
import {BookAddComponent} from './book-add/book-add.component';

export const route: Routes = [
  { path: '', redirectTo: '/booklist', pathMatch: 'full' },
  { path: 'booklist', component: BookListComponent, resolve: { book_list: BookListResolver} },
  { path: 'add', component: BookAddComponent },
];
