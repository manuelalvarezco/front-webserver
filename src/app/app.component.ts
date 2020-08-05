import { Component, OnInit } from '@angular/core';
import { UserService } from './core/services/users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front';


  users: any;

  constructor(){

  }

  // tslint:disable-next-line: typedef
  ngOnInit(){
  }
}
