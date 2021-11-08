import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from './title/title.component';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
@NgModule({
  declarations: [
    FormComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AtomsModule,
    MoleculesModule
  ],
  exports:[
    FormComponent,
    TitleComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class OrganismModule { }
