import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  imports: [],
  template: `
    <p (click)="onClick($event)" >
      lifecycle-demo works! {{demoInput}}
    </p>
  `,
  styleUrl: './lifecycle-demo.component.css'
})
export class LifecycleDemoComponent implements OnInit, OnChanges, OnDestroy {
  @Input() demoInput: string | undefined;

  constructor() {
    console.log('Constructor called: Component is being constructed');
  }

  onClick(event: any): void {
    console.log(event)
    this.demoInput = '👋'
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called: Input properties changed', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called: Component has been initialized');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called: Component is about to be destroyed');
  }
}
