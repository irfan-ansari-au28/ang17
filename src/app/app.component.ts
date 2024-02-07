import { Component } from '@angular/core';
import { PostListComponent } from './components/post-list/post-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostListComponent],
  template: `
    <h1>Welcome to {{title}} app</h1> 
    <app-post-list></app-post-list>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Posts';
}
