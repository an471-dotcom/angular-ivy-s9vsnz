import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';
import {NetflixModule} from '../netflix/netflix.module';
@NgModule({
  imports: [CommonModule, FormRoutingModule, FormsModule,NetflixModule],
  declarations: [FormComponent],
  exports: [FormComponent],
})
export class FormModule {}
