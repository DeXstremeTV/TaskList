import { TodoModel } from './../../model/todo-items-model';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DownloadAndCreateService } from '../../services/download-and-create.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [DownloadAndCreateService],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  /**
   *
   */
  constructor(private downloadAndCreateService: DownloadAndCreateService) {}

  newTodo: string = '';
  newTitle: any;
  openModal: boolean = false;

  todo: TodoModel[] = [
    {
      id: 2,
      title: 'feed the dragon',
      done: false,
    },
  ];

  public toggleCheck(item: TodoModel): void {
    item.done = !item.done;
  }

  public addTodo(): void {
    let newTodo: TodoModel = {
      id: 2 + Math.random(),
      title: this.newTodo,
      done: false,
    };

    this.todo.push(newTodo);
  }

  public deleteTodo(todoId: number): void {
    for (let i of this.todo) {
      if (i.id == todoId) {
        this.todo = this.todo.filter((i) => i.id !== todoId);
      }
    }
    this.toggleModal();
  }

  public editTodo(newTitle: string, todoId: number): void {
    for (let i of this.todo) {
      if (i.id == todoId) {
        i.title = newTitle;
      }
    }
    this.toggleModal();
  }

  public toggleModal(): void {
    this.openModal = !this.openModal;
  }

  // download todos

  // POST
  // download from BE
  createAndDownload(): void {
    this.downloadAndCreateService.createAndDownloadFile(this.todo).subscribe(
      (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'todo_file.txt'; // Update the filename if needed
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error('Error creating and downloading file:', error);
      }
    );
  }
}
