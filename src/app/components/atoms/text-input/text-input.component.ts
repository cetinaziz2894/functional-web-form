import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() label: string = '';
  @Input() hidden: string = '';
  @Input() field: string = '';
  @Input() type: string = '';
  @Input() mandatory: boolean = false;

  public value: string | any = '';
  @Output() valueChange = new EventEmitter<any>();
  @Input() error = '';

  regexs = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    name: /^[a-zA-ZıİğĞüÜşŞöÖçÇ\s]*$/,
  }

  constructor( private formService: FormService) { }

  ngOnInit(): void {   
  }

  change() {
    this.error = '';
    console.log(this.value);
    this.formService.setForm(this.field, this.value)
    this.validate(this.field, this.value);
  }

  getValue(event: Event): string | boolean{
    if((event.target as HTMLInputElement).type === "checkbox") {
      return (event.target as HTMLInputElement).checked;
    }
    else return (event.target as HTMLInputElement).value;
  }

  validate(type:string, value:any) {
    if(type === 'name'){
      this.error = !this.isElValid(value,this.regexs.name) ? "Name can't be emty or format is wrong":'';
    }
    if(type === 'email'){
      this.error = !this.isElValid(value,this.regexs.email) ? "Email can't be emty or format is wrong":'';
    }
  }

  isElValid(el: any, regex:RegExp) {
    if(regex.test(el))
    {
        return true;
    }
    return false;
  }

}
