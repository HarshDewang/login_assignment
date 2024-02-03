import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  
  users: User[] = [];

  constructor(private userService: UserServiceService) {
    this.users = this.userService.getAllUsers();
  }

}
