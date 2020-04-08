import { HttpClient } from '@angular/common/http';
import { Book } from './../Model/Book';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:5000";

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url + "/books");
  }
}
