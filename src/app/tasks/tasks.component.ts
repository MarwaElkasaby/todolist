import { TasksServiceService } from './../services/tasks-service.service';
import { Component, inject } from '@angular/core';
import { Task } from '../models/interfaces';
import { DatePipe } from '@angular/common';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { EditTaskComponent } from './edit-task/edit-task.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [DatePipe, NewTaskComponent, TaskComponent,EditTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {

 private tasksService = inject(TasksServiceService);
  
 
isAddingTask = false;

getTasks(){
  console.log(this.tasksService.getTasks());
  return this.tasksService.getTasks();
}
onStartAddTask() {
  this.isAddingTask = true;
}

onCloseAddTask() {
  this.isAddingTask = false;
}

}
