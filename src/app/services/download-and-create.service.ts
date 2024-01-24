import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoModel } from '../model/todo-items-model';


@Injectable({
    providedIn: 'root',
})
export class DownloadAndCreateService {
    private baseUrl = 'http://localhost:5062';

    constructor(private http: HttpClient) {}

    createAndDownloadFile(todoModel: TodoModel[]): Observable<Blob> {
        const url = "http://localhost:5062/api/File/createAndDownload";

        return this.http.post<Blob>(url, todoModel, { responseType: 'blob' as 'json' });
    }
}