import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';
@NgModule({
  imports: [CommonModule, FormRoutingModule, FormsModule],
  declarations: [FormComponent],
  exports: [FormComponent],
})
export class FormModule {}
