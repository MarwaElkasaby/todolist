import { NewTaskData, Task } from './../models/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {
  private tasks:Task[] =[
  {id:"1",title:'task1',description:'d1',duedate:'2024-08-15'},
  {id:"2",title:'task2',description:'d2',duedate:'2024-08-07'},
  {id:"3",title:'task3',description:'d2',duedate:'2024-08-20'}
]

getTasks() {
  return this.tasks;
}

addTask(taskData: NewTaskData) {
  this.tasks.unshift({
    id: new Date().getTime().toString(),
    title: taskData.title,
    description: taskData.description,
    duedate: taskData.date,
  });
}

editTask(id: string, updatedTask: Task) {
  const taskIndex = this.tasks.findIndex(task => task.id === id);
  if (taskIndex !== -1) {
    this.tasks[taskIndex] = updatedTask;
  }
}
// updateTask(id: string, updatedTask: Task): void {
//   const index = this.tasks.findIndex(task => task.id === id);
//   if (index !== -1) {
//     this.tasks[index] = updatedTask;
//   }
// }
removeTask(id: string) {
  this.tasks = this.tasks.filter(task => task.id !== id);
}
  constructor() { }
}
