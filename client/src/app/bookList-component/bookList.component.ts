import { Component, OnInit } from '@angular/core';
import { Book } from '../Model/Book';
import { BookService } from '../service/book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './bookList.component.html',
  styleUrls: ['./bookList.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private service: BookService) { }

  books: Book[];

  reload(){
    this.service.getBooks().subscribe( args => { this.books = args });
  }
  
  ngOnInit() {
    this.reload();
  }
}
