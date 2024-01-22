import { Component } from '@angular/core';
import { TodoModel } from '../../model/todo-items-model';
import { CommonModule } from '@angular/common';
import * as fs from 'fs';
import * as path from 'path';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  todo: TodoModel[] = [
    {
      id: 2, 
      title: "feed the dragon",
      done: false
    },
    {
      id: 4,
      title: "ward the jungle",
      done: false
    }
  ];

  toggleCheck(item: TodoModel): void {
    item.done = !item.done;
  }

  // add task

  // delete task

  // edit task

  // download todos
  public downloadTodos(): void {
    // POST

    // download from BE
  }
  
}
