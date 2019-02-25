import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LcuStateModule } from '@lcu-ide/lcu-state-common';
import { FathymSharedModule } from '@lcu-ide/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FathymSharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    LcuStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
