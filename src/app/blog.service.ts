import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Blog } from './types/blog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
 
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private http = inject(HttpClient);

  constructor() {}

  getAllBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>('assets/blogs.json'); 
  }


  getFeaturedBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>('assets/featured-blogs.json'); 
  }

  getBlogById(id: number): Observable<Blog | undefined> {
    return this.http.get<Blog[]>('assets/blogs.json').pipe(
      map(blogs => blogs.find(blog => blog.id === id)) 
    );
  }
 }
