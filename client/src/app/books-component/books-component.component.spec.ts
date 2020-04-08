import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksComponentComponent } from './books-component.component';

describe('BooksComponentComponent', () => {
  let component: BooksComponentComponent;
  let fixture: ComponentFixture<BooksComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
