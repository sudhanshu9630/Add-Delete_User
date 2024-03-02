// user-data.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private userListSubject = new BehaviorSubject<any[]>([]);
  userList$ = this.userListSubject.asObservable();

  constructor() {}

  addUser(user: any) {
    const currentList = this.userListSubject.value;
    this.userListSubject.next([...currentList, user]);
  }

  removeUser(user: any) {
    const currentList = this.userListSubject.value;
    const updatedList = currentList.filter((u) => u !== user);
    this.userListSubject.next(updatedList);
  }
}
