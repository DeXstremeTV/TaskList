import { TodoModel } from './../../model/todo-items-model';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent {
  newTodo: string = "";
  
  todo: TodoModel[] = [
    {
      id: 2, 
      title: "feed the dragon",
      done: false
    },
    {
      id: 4,
      title: "ward the jungle",
      done: true
    }
  ];

  public toggleCheck(item: TodoModel): void {
    item.done = !item.done;
  }

  // add task
  public addTodo(): void {
    let newTodo: TodoModel = {
      id: 2 + Math.random(), 
      title: this.newTodo,
      done: false
    };

    this.todo.push(newTodo);
  }

  // delete task
  public deleteTodo(todoId: number): void {
    for(let i of this.todo){
      if (i.id == todoId) {
        this.todo = this.todo.filter(i => i.id !== todoId );
      }
    }
  }

  // edit task

  // download todos
    // POST
    // download from BE
}
