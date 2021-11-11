import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';
import { AuthGuard } from '../auth/resources/auth.guard';
import { AdminGuard } from '../auth/resources/admin.guard';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  {
    path: 'user-item/:id',
    canActivate: [AdminGuard],
    component: UserItemComponent,
  },
  {
    path: 'user-add',
    canActivate: [AdminGuard],
    component: UserAddComponent,
  },
  {
    path: 'user-edit/:id',
    canActivate: [AdminGuard],
    component: UserEditComponent,
  },
  {
    path: 'user-list',
    canActivate: [AdminGuard],
    component: UserListComponent,
  },
  {
    path: 'user-view/:id',
    component: UserViewComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
