import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponentComponent } from './bookList-component.component';

describe('BooksComponentComponent', () => {
  let component: BookListComponentComponent;
  let fixture: ComponentFixture<BookListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
