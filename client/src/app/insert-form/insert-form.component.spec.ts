import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertFormComponent } from './insert-form.component';

describe('InsertFormComponent', () => {
  let component: InsertFormComponent;
  let fixture: ComponentFixture<InsertFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
