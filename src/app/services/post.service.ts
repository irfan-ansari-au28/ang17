import { Injectable } from '@angular/core';
import { Post } from '../interface/post';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  constructor(private http: HttpClient) { }

  baseUrl = 'https://jsonplaceholder.typicode.com'

  getPost(): Observable<Post[] | undefined> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`).pipe(
      catchError(error => {
        console.error('Error fetching posts', error)
        return of(undefined)
      })
    )
  }

  createPost(postData: Post): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}/posts`, postData, {
      headers:
      {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
  }


  // Promise version
  async fetchPost(): Promise<Post[] | undefined> {
    try {
      const response = await fetch(`${this.baseUrl}/posts`)
      if (!response.ok) {
        throw new Error('Network response was not okay')
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.error('There was an error fetching posts', error)
      return []
    }
  }
}
