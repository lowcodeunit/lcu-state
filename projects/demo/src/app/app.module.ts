import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LcuStateModule } from '@lcu-ide/lcu-state-common';
import { FathymSharedModule } from '@lcu-ide/common';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [FathymSharedModule.forRoot(environment), BrowserModule, BrowserAnimationsModule, LcuStateModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
