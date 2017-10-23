import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import { BookDataService } from './book-data.service';
import {BookListResolver} from './resolvers/book-list.resolver';

import { AppComponent } from './app.component';
import { route } from './route';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      route,
      { enableTracing: false }
    ),
    HttpModule
  ],
  providers: [
    BookDataService,
    BookListResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
