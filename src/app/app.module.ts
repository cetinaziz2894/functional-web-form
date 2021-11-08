import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AtomsModule } from './components/atoms/atoms.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrganismModule } from './components/organism/organism.module';
import { FunctionalformComponent } from './pages/functionalform/functionalform.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FunctionalformComponent
  ],
  imports: [
    BrowserModule,
    AtomsModule,
    OrganismModule,
    BrowserAnimationsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
