import { Component, OnInit } from '@angular/core';
import { PostItemComponent } from '../post-item/post-item.component';
import { PostService } from '../../services/post.service';
import { Post } from '../../interface/post';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostItemComponent],
  template: `
    <p>
      post-list works!
      <app-post-item></app-post-item>
    </p>
  `,
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  constructor(private postService: PostService) { }
  posts: Post[] =[]
  async ngOnInit(): Promise<void> {
    const posts = await this.postService.fetchPost()
    console.log(posts)
    this.posts = posts || []
  }

}
