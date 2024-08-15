import { Task } from './../../models/interfaces';
import { Component, EventEmitter, Input,Output,inject } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { TasksServiceService } from '../../services/tasks-service.service';
import { EditTaskComponent } from "../edit-task/edit-task.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, EditTaskComponent, NgClass],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  private tasksService = inject(TasksServiceService);
  @Input({ required: true }) task!: Task;
  @Output() edit = new EventEmitter<Task>();
  isEditing = false;

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }

  editTask() {
    this.edit.emit(this.task);
    this.isEditing=true
   
  }

  deleteTask() {
    this.tasksService.removeTask(this.task.id);
  }

  onEditClose() {
    this.isEditing = false;
  }



}