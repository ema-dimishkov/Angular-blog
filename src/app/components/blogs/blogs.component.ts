import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../blog.service'; // Adjust the import path as necessary
import { Blog } from '../../types/blog'; // Adjust the import path as necessary
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, RouterLink],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];
 
  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getAllBlogs().subscribe(
      (result: Blog[]) => {
        console.log('Fetched blogs:', result); // Log the fetched blogs
        this.blogs = result;

        this.blogs = result;
        console.log('Fetched blogs:', this.blogs);
       },
      (error) => {
        console.error('Error fetching blogs:', error);
      }
    );
  }
}
