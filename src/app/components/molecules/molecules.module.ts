import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormElementComponent } from './form-element/form-element.component';
import { AtomsModule } from '../atoms/atoms.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormElementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AtomsModule
  ],
  exports:[
    FormElementComponent
  ]
})
export class MoleculesModule { }
