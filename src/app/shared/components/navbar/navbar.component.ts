import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../../core/services/sidenav/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public sidenavService: SidenavService) { }

  close=false;

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  openSidenav(event){
    this.sidenavService.updateData(event);

    this.close = true;
  }

  // tslint:disable-next-line: typedef
  closeSidenav(event){
    this.sidenavService.updateData(event);

    this.close = false;
  }



}
