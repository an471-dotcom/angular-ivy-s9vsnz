import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetflixComponent } from './netflix.component';
import { NetflixRoutingModule } from './netflix-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, NetflixRoutingModule, FormsModule],
  declarations: [
    NetflixComponent,
    HomepageComponent,
    LoginComponent,
    ButtonComponent,
  ],
  exports: [NetflixComponent,ButtonComponent],
})
export class NetflixModule {}
