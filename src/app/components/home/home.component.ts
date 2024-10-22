import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../blog.service';
import { Blog } from '../../types/blog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredBlogs: Blog[] = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Machine learning project',
      content: 'Check out my recent ML project!',
      image: "assets/ML1.jpg",
      isFeatured: true,
      categoryId: 'project1'
    },
    {
      id: 2,
      title: 'Project 2',
      description: '@FEEIT lab exercises',
      content: 'Check out my lab exercises!',
      image: 'assets/feitlab.jpg',
      isFeatured: true,
      categoryId: 'project2'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Simple Weather App',
      content: 'Test the Weather today!',
      image: 'assets/weatherapp.jpg',
      isFeatured: true,
      categoryId: 'project3'
    }
  ];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getFeaturedBlogs().subscribe(
      (result: Blog[]) => {
        this.featuredBlogs = result;
      },
      (error) => {
        console.error('Error fetching featured blogs:', error);
      }
    );
  }
}
