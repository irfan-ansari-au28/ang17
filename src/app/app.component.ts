import { Component } from '@angular/core';
import { PostListComponent } from './components/post-list/post-list.component';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostListComponent, RouterModule],
  template: `
    <h1>{{title}}</h1> 
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular 17';
}
