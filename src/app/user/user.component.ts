// user.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userList: any[] = [];

  constructor(private router: Router, private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userDataService.userList$.subscribe((list) => {
      this.userList = list;
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  remove(user: any) {
    this.userDataService.removeUser(user);
  }
}
