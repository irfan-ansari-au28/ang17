import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { LifecycleDemoComponent } from './components/lifecycle-demo/lifecycle-demo.component';

export const routes: Routes = [
    {
        path: '', component:PostListComponent,
        title: 'Posts'
    },
    {
        path: 'posts/create', component:CreatePostComponent,
        title: 'Ceate Post'
    },
    {
        path: 'lifecycle', component:LifecycleDemoComponent,
        title: 'Lifecycle methods'
    },

];
