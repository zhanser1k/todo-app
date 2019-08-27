import { Component } from '@angular/core';

import { TodoDataService } from '../../services/todo-data/todo-data.service';
import { Todo } from '../../classes/todo/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})

export class AddTodoComponent  {
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {}

  addTodo() {
    if (!this.newTodo.title) { return; }
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }
}
