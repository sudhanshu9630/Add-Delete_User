// add-user.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userDataService: UserDataService) {
    this.userForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      department: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  addItem(): void {
    this.userDataService.addUser(this.userForm.value);
    this.userForm.reset();
  }

  reset() {
    this.userForm.reset();
  }

  ngOnInit(): void {}
}
