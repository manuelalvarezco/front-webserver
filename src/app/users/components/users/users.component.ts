import { UserService } from './../../../core/services/users/user.service';
import { User } from './../../../core/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService){

  }

  // tslint:disable-next-line: typedef
  ngOnInit(){

    this.userService.getUsers()
      .subscribe( users => {
        this.users = users;
      });
  }

}
