import { Component } from '@angular/core';
import { TodoModel } from '../../model/todo-items-model';
import { CommonModule } from '@angular/common';
import * as fs from 'fs';

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

  // save to file
  downloadTodos(): void {
    const jsonData = JSON.stringify(this.todo, null, 2); 
    const filePath = `${__dirname}/todo.txt`; 

    // Convert the TodoModel to JSON format
    const todoJson = JSON.stringify(this.todo, null, 2);

    // Write the JSON to the file
    fs.writeFileSync(filePath, todoJson, 'utf-8');
    console.log("clicked")
  }
  
}
