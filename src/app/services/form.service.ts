import { Injectable } from '@angular/core';
import { FormModel } from '../model/form-model.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  form = new FormModel();
  error:string='';

  constructor() { }

  setForm(type:string, val:string){
    if(type === 'email'){
      this.form.email = val;
    }else if(type === 'name'){
      this.form.name = val;
    }else if(type === 'confirm'){
      this.form.confirm = val;
    }
  }

  getForm(){
    return this.form;
  }

  isFormValid(){
    if(this.form.confirm && this.form.email && this.form.name){
      return false;
    }else return true;
  }

  setError(text:string){
    this.error = text;
  }

  getError(){
    return this.error;
  }

  resetForm(){
    this.form.name ='';
    this.form.email ='';
    this.form.confirm =false;
  }
}
