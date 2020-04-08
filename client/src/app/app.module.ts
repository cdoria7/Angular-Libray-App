import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookListComponent } from './bookList-component/bookList.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { InsertFormComponent } from './insert-form/insert-form.component';
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';


@NgModule({
  declarations: [AppComponent, BookListComponent, InsertFormComponent, DeleteFormComponent, UpdateFormComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
