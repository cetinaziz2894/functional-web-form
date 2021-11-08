import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-functionalform',
  templateUrl: './functionalform.component.html',
  styleUrls: ['./functionalform.component.css']
})
export class FunctionalformComponent implements OnInit {
  inputs: any = [];
  constructor(private httpClient: HttpClient) {
   }

  ngOnInit(): void {
    this.httpClient.get("assets/to-render.json").subscribe(data =>{
      console.log(data);
      this.inputs = data;
    })
    console.log(this.inputs)
  }

}
