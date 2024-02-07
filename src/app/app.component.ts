import { Component } from '@angular/core';
import { PostListComponent } from './components/post-list/post-list.component';
import { RouterModule } from '@angular/router';
import { ChangeBgOnHoverDirective } from './directives/change-bg-on-hover.directive';
import { SimpleTransformPipe } from './pipes/simple-transform.pipe';
import { LifecycleDemoComponent } from './components/lifecycle-demo/lifecycle-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostListComponent, RouterModule, ChangeBgOnHoverDirective, SimpleTransformPipe, LifecycleDemoComponent],
  template: `
    <h1>{{title}}</h1> 
    <div appChangeBgOnHover>
      Hover over to change background color!
    </div>
    <div>
      {{ 'pipe has transformed me!!!' | simpleTransform }}
    </div>
    <app-lifecycle-demo [demoInput]="'Thanks!!🎈'"></app-lifecycle-demo>

    @if(isValid){
      <p>It is valid ✅</p>
    }@else{
      <p>Good Bye 😂</p>
    }

    <h4 [routerLink]="'lifecycle'">Lifecylce Hooks</h4>


    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular 17';
  isValid: boolean = Math.random() > 0.5 ? true : false;
}
