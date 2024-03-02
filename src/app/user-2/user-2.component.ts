import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-2',
  templateUrl: './user-2.component.html',
  styleUrl: './user-2.component.css'
})
export class User2Component {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
