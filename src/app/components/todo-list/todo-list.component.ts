import { Component } from '@angular/core';

import { TodoDataService } from '../../services/todo-data/todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})

export class TodoListComponent {
  constructor(private todoDataService: TodoDataService) {}

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  deleteTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }
}
