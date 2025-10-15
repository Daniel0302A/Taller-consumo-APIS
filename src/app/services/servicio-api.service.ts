import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { postI } from '../types/tipoApis';
@Injectable({
  providedIn: 'root',
})
export class ServicioAPIService {
  constructor(private http: HttpClient) {}
  getPost(): Observable<postI[]> {
    let apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    return this.http.get<postI[]>(apiUrl).pipe(
      map((posts) => {
        return posts.map((post) => ({
          userId: post.userId,
          id: post.id,
          title: post.title,
          body: post.body,
        }));
      })
    );
  }
}
