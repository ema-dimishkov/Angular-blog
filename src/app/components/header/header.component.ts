import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, // Mark as standalone
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/']); // Navigate to the home route
  }
}
