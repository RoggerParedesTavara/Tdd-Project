import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './views/user-view/user-view.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [
    UserViewComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
