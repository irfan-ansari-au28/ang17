import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodosService } from '../../services/todos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodosService) { }

  comments: any = []

  ngOnInit(): void {
    console.log('coponent loads')
    this.todoService.getComments().subscribe(comments => {
      this.comments = comments
      console.log(this.comments,'comments')
    })
  }

  handleClick(id:any){
    console.log(id,'parent')
  }

}
