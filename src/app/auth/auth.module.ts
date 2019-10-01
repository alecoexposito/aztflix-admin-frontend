import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {NbAuthModule} from "@nebular/auth";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NbAlertModule, NbButtonModule, NbCheckboxModule, NbIconModule, NbInputModule} from "@nebular/theme";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NbAuthModule,
    NbIconModule,
  ],
})
export class AuthModule { }
