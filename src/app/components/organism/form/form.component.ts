import { Component, Input } from '@angular/core';
import {
  FormGroup
} from '@angular/forms';
import { FormModel } from 'src/app/model/form-model.model';
import { InputBase } from 'src/app/model/input-base';
import { FormService } from 'src/app/services/form.service';

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() inputs: InputBase<string>[] | null = [];

  submitted = false;
  
  formValues = new FormModel();

  error:string = '';

  constructor(public formService: FormService) {
    this.formValues = this.formService.getForm();
    console.log(this.formValues);
   }

  ngOnInit(): void {
    console.log(this.inputs);
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.formValues);
    this.formService.resetForm();
    this.submitted = false;
  }
}
