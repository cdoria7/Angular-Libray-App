import { Component } from '@angular/core';
import { Book } from '../Model/Book';
import { BookService } from '../service/book.service';

@Component({
  selector: "app-update-form",
  templateUrl: "./update-form.component.html",
  styleUrls: ["./update-form.component.css"],
})
export class UpdateFormComponent {

  updateBook: Book = {
    id: String = "", 
    title: String = "",
    author: String = "",
  };

  constructor(private service: BookService) {}

  update() {
    this.service.update(this.updateBook).subscribe((data) => {
      console.log(data);
    });
    this.updateBook.id = "";
    this.updateBook.title = "";
    this.updateBook.author = "";
  }
}
