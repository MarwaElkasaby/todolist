import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksServiceService } from '../../services/tasks-service.service';
import { FormsModule } from '@angular/forms';
import { NewTaskData, Task } from '../../models/interfaces';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {
  constructor(private tasksService: TasksServiceService) { }

  @Input() taskdata!: Task;
  @Output() close = new EventEmitter<void>();
  taskToEdit:any

editedTitle='';
editedDescription='';
editedDuedate='';

ngOnInit(){
  this.taskToEdit=this.taskdata;
    console.log(this.taskToEdit);
    this.editedTitle=this.taskToEdit.title;
    this.editedDescription=this.taskToEdit.description;
    this.editedDuedate=this.taskToEdit.duedate;
}


  onCancel() {
console.log(this.editedTitle);
this.taskToEdit.title=this.editedTitle
this.taskToEdit.description=this.editedDescription
this.taskToEdit.duedate=this.editedDuedate
    this.close.emit();
  }

  onSubmit() {
   
    const updatedTask = {
      id:this.taskToEdit.id,
      title: this.taskToEdit.title,
      description: this.taskToEdit.description,
      duedate: this.taskToEdit.duedate
    };
    console.log(this.taskToEdit.duedate);

    this.tasksService.editTask(this.taskToEdit.id, updatedTask);
    this.close.emit();
  }
}