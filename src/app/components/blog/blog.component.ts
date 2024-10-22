import { ActivatedRoute } from '@angular/router';
import { BlogService } from './../../blog.service';
import { Component, inject, OnInit } from '@angular/core';
import { Blog } from './../../types/blog';
import { CommonModule } from '@angular/common'; // Import CommonModule
 
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent implements OnInit {
  BlogService = inject(BlogService);
  route = inject(ActivatedRoute);
  blog: Blog | undefined; // Property to hold the blog data

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; // Use '+' to convert to a number
    this.BlogService.getBlogById(id).subscribe((data) => {
      this.blog = data; // Set the blog data
      console.log(this.blog);
    });
  }
 }
