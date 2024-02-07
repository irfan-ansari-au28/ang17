import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../interface/post';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h3>Post Create</h3>
    <form (submit)="onSubmit()">
      <div>
        <input #titleInput placeholder="Title" type="text" name="post.title" [(ngModel)]="post.title">
      </div>
      <div>
        <input placeholder="Description" type="text" name="post.body" [(ngModel)]="post.body">
      </div>
      <div>
        <input placeholder="User Id" type="number" name="post.userId" [(ngModel)]="post.userId">
      </div>
      <button type="submit">Create</button>
    </form>
  `,
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent implements AfterViewInit {

  constructor(private postService: PostService, private router: Router){}

  @ViewChild('titleInput') titleInput!:ElementRef<HTMLInputElement>
  
  post: Post = {
    title: '',
    body: '',
    userId: 1
  }

  ngAfterViewInit() {
    this.titleInput.nativeElement.focus()
    console.log(this.titleInput.nativeElement)
  }


  onSubmit() {
    console.log(this.post, 'post')
    this.postService.createPost(this.post).subscribe((value) =>{
      console.log(value)
      this.router.navigate(['/'])
    })
  }
}
