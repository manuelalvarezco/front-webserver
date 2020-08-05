import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [UsersComponent, UserComponent, UserDetailComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CoreModule,
    MaterialModule,
  ]
})
export class UsersModule { }
