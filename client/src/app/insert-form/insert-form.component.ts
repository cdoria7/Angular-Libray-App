import { Component, OnInit } from '@angular/core';
import { Book } from '../Model/Book';
import { BookService } from '../service/book.service';

@Component({
  selector: "app-insert-form",
  templateUrl: "./insert-form.component.html",
  styleUrls: ["./insert-form.component.css"],
})
export class InsertFormComponent {
  
  newBook: Book = {
    title: String = "",
    author: String = ""
  };

  constructor(private service: BookService) {}

  save() {    
    this.service.save(this.newBook).subscribe(
      (data) => { console.log(data) });
    this.newBook.title = '';
    this.newBook.author = '';
  }
  
}
