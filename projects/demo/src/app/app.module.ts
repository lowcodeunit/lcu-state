import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LcuStateModule } from '@lcu-ide/lcu-state-common';
import { FathymSharedModule, LCUServiceSettings } from '@lcu-ide/common';

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
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: <LCUServiceSettings>{
        APIRoot: `http://localhost:52235`,
        // APIRoot: `http://www.lowcodeunit.com`,
        // APIRoot: ``,
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
