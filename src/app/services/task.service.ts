import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task';


let tasks:Task[] = [
  new Task("1", "task 1",4,"01-04-2020","01-04-2020","01-04-2020"),
  new Task("2", "task 1",3,"01-04-2020","01-04-2020","01-04-2020"),
  new Task("3", "task 1",7,"01-04-2020","01-04-2020","01-04-2020")
]

let taskList = of(tasks);


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getAllTasks():Observable<Task[]>{
    return taskList;
  }

}
