import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from './todos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class TodosService {

  constructor(private http: HttpClient) {}

 
  private baseUrl = 'https://jsonplaceholder.typicode.com';


  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/comments`);
  }
}


