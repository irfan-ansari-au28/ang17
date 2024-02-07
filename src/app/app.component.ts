import { Component } from '@angular/core';
import { PostListComponent } from './components/post-list/post-list.component';
import { RouterModule } from '@angular/router';
import { ChangeBgOnHoverDirective } from './directives/change-bg-on-hover.directive';
import { SimpleTransformPipe } from './pipes/simple-transform.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostListComponent, RouterModule, ChangeBgOnHoverDirective, SimpleTransformPipe],
  template: `
    <h1>{{title}}</h1> 
    <div appChangeBgOnHover>
      Hover over to change background color!
    </div>
    <div>
      {{ 'pipe has transformed me!!!' | simpleTransform }}
    </div>

    @if(isValid){
      <p>It is valid ✅</p>
    }@else{
      <p>Good Bye 😂</p>
    }


    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular 17';
  isValid: boolean = Math.random() > 0.5 ? true : false;
}
