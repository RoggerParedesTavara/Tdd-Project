import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './views/user-view/user-view.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    UserViewComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class UsersModule { }
