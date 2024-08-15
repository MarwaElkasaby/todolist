import { Component } from '@angular/core';
import { TasksComponent } from "../tasks/tasks.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
