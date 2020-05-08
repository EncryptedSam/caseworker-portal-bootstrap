import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  userUrl = 'http://localhost/json/tasks.json';

  //Fetches data from db
  getAllTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.userUrl);
  }

}
