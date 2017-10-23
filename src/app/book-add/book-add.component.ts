import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {BookDataService} from '../book-data.service';
import {Book} from '../book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  titleControl = new FormControl('', [Validators.required, Validators.minLength(7)]);
  authorControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  successMessage = '';
  failMessage = '';

  constructor(
    private _builder: FormBuilder,
    private _router: Router,
    private _bookDataService: BookDataService,
  ) { }

  addForm = this._builder.group({
    title: this.titleControl,
    author: this.authorControl
  });

  ngOnInit() {
    this.successMessage = '';
    this.failMessage = '';
  }

  add() {
    const book: Book = {
      title: this.addForm.value.title,
      author: this.addForm.value.author
    };
    this._bookDataService.addBook(book).subscribe(
      res => {
        this.failMessage = '';
        this.successMessage = 'Add Successfully!';
        this.addForm.reset();
      },
      err => {
        this.addForm.reset();
        this.successMessage = '';
        this.failMessage = 'Addbook Failed';
      }
    );
  }
}
