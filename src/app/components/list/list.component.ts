import { Component } from '@angular/core';
import { TodoModel } from '../../model/todo-items-model';
import { CommonModule } from '@angular/common';

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
    title: "wew"
    },
    {
        id: 4,
        title: "whatever"
    }
  ];




}
