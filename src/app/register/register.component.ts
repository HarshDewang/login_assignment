import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  signUpObj = {
    userName: '',
    email: '',
    password: '',
  };

  errorMessage: string = '';

  constructor(private userService: UserServiceService, private router: Router) {}

  onRegister(): void {
    const existingUser = this.userService.getUser(this.signUpObj.userName);

    if (existingUser) {
      this.errorMessage = 'User name already exists. Choose another one.';
    } else {
      this.userService.addUser(this.signUpObj);
      this.router.navigate(['/login']);
    }
  }

}