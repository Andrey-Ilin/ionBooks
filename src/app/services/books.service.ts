import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class BooksService {
  http:any;
  baseUrl:String;

  constructor(http:Http){
    this.http = http;
    this.baseUrl = 'http://vanilla.dev.htmlcms.me/books/';
  }

  getBooks() {
    return this.http.get(this.baseUrl)
      .map(res => res.json())
  }
  
  getOneBook(bookId:string) {
    return this.http.get(this.baseUrl + bookId)
      .map(res => res.json())
  }
}
