import { Component, Input } from '@angular/core';
import { Post } from '../../interface/post';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [],
  template: `
      <div class="card">
        <h2>{{ post.title }}</h2>
        <p>{{post.body}}</p>
      </div>
  `,
  styleUrl: './post-item.component.css'
})
export class PostItemComponent {
  @Input() post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  }
}
