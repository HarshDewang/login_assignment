import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loginObj = {
    userName: '',
    password: '',
  };

  errorMessage: string = '';

  constructor(private userService: UserServiceService, private router: Router) {}

  onLogin(): void {
    const user = this.userService.getUser(this.loginObj.userName);

    if (user && user.password === this.loginObj.password) {
      this.router.navigate(['/account']);
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }
}
