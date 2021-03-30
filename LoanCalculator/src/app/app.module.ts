import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanInputComponent } from './loan-input/loan-input.component';
import { LoanOutputComponent } from './loan-output/loan-output.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanInputComponent,
    LoanOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
