import { Component, OnInit } from '@angular/core';
import { PostItemComponent } from '../post-item/post-item.component';
import { PostService } from '../../services/post.service';
import { Post } from '../../interface/post';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostItemComponent, CommonModule, RouterLink],
  template: `
    <div>
      <p>Posts</p>
      <button [routerLink]="'posts/create'">Create Post</button>
    </div>

    @for(post of posts; track post.id){
        <app-post-item [post]=post></app-post-item>
      }@empty {
        <li> There is no items available!</li>
      }
      <!-- <app-post-item *ngFor="let post of posts"></app-post-item> -->
  `,
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  constructor(private postService: PostService) { }
  posts: Post[] = []
  ngOnInit(): void {
    this.postService.getPost().subscribe(
      (posts: Post[] | undefined) => {
        console.log(posts)
        this.posts = posts || []
      },)
  }

  // Promise version
  // async ngOnInit(): Promise<void> {
  //   const posts = await this.postService.fetchPost()
  //   console.log(posts)
  //   this.posts = posts || []
  // }

}
