import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../app/services/books.service';
import { Book } from '../../app/interfces/bookInterface'

import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'details.html'
})
export class DetailsBookPage implements OnInit{
  bookId: string;
  book: Book = {
    title: '',
    field_books_image: '',
    nid: '',
    type: ''
  };
  constructor(public navCtrl: NavController, public params: NavParams, private booksService:BooksService) {
    this.bookId = this.params.get('id');
  }

  ngOnInit() {
    this.getOneBook(this.bookId);
  }

  getOneBook(bookId:string) {
    this.booksService.getOneBook(bookId)
      .subscribe(res => {
        this.book = res[0];
      });
  }

}

