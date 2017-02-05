import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../app/services/books.service';

import { NavController } from 'ionic-angular';
import { DetailsBookPage } from '../details/details';

@Component({
  selector: 'books',
  templateUrl: 'books.html'
})
export class BooksPage implements OnInit{
  books:any;

  constructor(public navCtrl: NavController, private booksService:BooksService) {

  }

  ngOnInit() {
    this.getBooks()
  }

  getBooks(){
    this.booksService.getBooks()
      .subscribe(res => {
        this.books = res;
      });
  }

  viewBook(bookId:number) {
    this.navCtrl.push(DetailsBookPage, {
      id: bookId
    })
  }
}

