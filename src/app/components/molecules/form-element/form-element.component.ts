import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {

  @Input() label:string = '';
  @Input() hidden:string = '';
  @Input() field:string = '';
  @Input() type:string = '';
  @Input() mandatory: boolean = false;
  @Input() error = '';

  constructor() { }

  ngOnInit(): void {    
  }

}
