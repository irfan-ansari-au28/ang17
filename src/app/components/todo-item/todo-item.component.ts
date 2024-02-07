import { Component, Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() item: any = {};
  @Output() btnClick = new EventEmitter()

  onClick(id:any){
    console.log('clicked', id)
    this.btnClick.emit(id)
  }
}
