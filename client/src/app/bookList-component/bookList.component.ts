import { Component, OnInit } from '@angular/core';
import { Book } from '../Model/Book';
import { BookService } from '../service/book.service';


@Component({
  selector: 'app-bookList-component',
  templateUrl: './bookList-component.component.html',
  styleUrls: ['./bookList-component.component.css']
})
export class BookListComponentComponent implements OnInit {

  constructor(private service: BookService) { }

   book: Book = {
      _id: "dfabc826-53db-4d77-a024-b557aa6f39cf",
      title: "Ergonomic Frozen Chicken",
      author: "Vincent Koss",
    }

  books: Book[];
  ngOnInit() {
    this.service.getBooks().subscribe(
      args => {
        this.books = args;
      }
    );
  }
}
