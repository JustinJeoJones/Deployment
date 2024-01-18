import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deployment';
  constructor(private http:HttpClient){}
  allUsers: User[] = [];
  newUser: User = {} as User;
  ngOnInit(){
    this.http.get<User[]>(environment.apiDomain+ "/api/Users").subscribe(response => this.allUsers = response);
  }

  addUser(){
    this.http.post<User>(environment.apiDomain+ "/api/Users", this.newUser).subscribe(response => this.allUsers.push(response));
  }
}
