import { HttpClient } from '@angular/common/http';
import { Book } from './../Model/Book';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Book } from '../Model/Book';

@Injectable({
  providedIn: "root",
})
export class BookService {
  constructor(private http: HttpClient) {}
  url = "http://localhost:5000";

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url + "/books");
  }

  save(book: Book): Observale<any> {
    return this.http.post(this.url + "/books", book);
  }

  delete(id: String): Observale<any> {
    return this.http.delete(this.url + "/books/" + id);
  }

  update(book: Book): Observale<any> {
    return this.http.put(this.url + "/books/" + book.id, book);
  }

}
