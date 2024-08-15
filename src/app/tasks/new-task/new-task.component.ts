import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksServiceService } from '../../services/tasks-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})


export class NewTaskComponent {
  private tasksService = inject(TasksServiceService);
  @Output() close = new EventEmitter<void>();


  enteredTitle = '';
  enteredDescription = '';
  enteredDate = '';

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        description: this.enteredDescription,
        date: this.enteredDate,
      },
      
    );
    this.close.emit();
  }
}
