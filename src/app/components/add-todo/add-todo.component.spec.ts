import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoComponent } from './add-todo.component';
import { FormsModule } from '@angular/forms';
import {Todo} from '../../classes/todo/todo';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTodoComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have a newTodo todo`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.newTodo instanceof Todo).toBeTruthy();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
