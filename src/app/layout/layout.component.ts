import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../core/services/sidenav/sidenav.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  showFiller = false;

  sidenav$: Observable<boolean>;

  public opened;

  constructor(public sidenavService: SidenavService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.sidenavService.sidenav$.subscribe(
      data => {
        this.opened = data;
      }
    );
  }

}
