import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {


  constructor(private taskService:TaskService) { }
  
  allTasks:Task[];

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks():void{
    this.taskService.getAllTasks().subscribe(
      (data) => this.allTasks = data
    );
  }

}
