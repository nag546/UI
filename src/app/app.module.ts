import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MustMatchDirective } from './_helpers/must-match.directive';
import { EmailValidator } from './_helpers/email-validator.directive';

//import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
    //BrowserAnimationsModule
    //OwlDateTimeModule,
    //OwlNativeDateTimeModule
  ],
  declarations: [
    AppComponent,
    MustMatchDirective,
    EmailValidator
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }