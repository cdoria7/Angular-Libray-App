import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';

@Component({
  selector: "app-delete-form",
  templateUrl: "./delete-form.component.html",
  styleUrls: ["./delete-form.component.css"],
})
export class DeleteFormComponent {
  id: String;

  constructor(private service: BookService) {}

  delete() {
    this.service.delete(this.id).subscribe((data) => {
      console.log("Book Deleted");
    });
    this.id = '';
  }

}
