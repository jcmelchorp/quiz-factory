import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleQuestionComponent } from './simple-question.component';

describe('SimpleQuestionComponent', () => {
  let component: SimpleQuestionComponent;
  let fixture: ComponentFixture<SimpleQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
