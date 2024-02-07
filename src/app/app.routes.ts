import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

export const routes: Routes = [
    {
        path: '', component:PostListComponent,
        title: 'Posts'
    },
    {
        path: 'posts/create', component:CreatePostComponent,
        title: 'Ceate Post'
    },

];
