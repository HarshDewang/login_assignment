import { Injectable } from '@angular/core';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  [x: string]: any;
  private signUpUsers: User[] = [];
  private currentUser: User | null = null;

  constructor() {
    const localData = localStorage.getItem('signUpUsers');
    if (localData) {
      this.signUpUsers = JSON.parse(localData);
    }

    const currentUserData = localStorage.getItem('currentUser');
    if (currentUserData) {
      this.currentUser = JSON.parse(currentUserData);
    }
  }

  addUser(user: User): void {
    this.signUpUsers.push(user);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));
  }
  getUser(userName: string): any {
    return this.signUpUsers.find((user) => user.userName === userName);
  }
  getAllUsers(): User[] {
    return this.signUpUsers;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  getUserByUsername(username: string): User | undefined {
    return this.signUpUsers.find(user => user.userName === username);
  }
}
  
