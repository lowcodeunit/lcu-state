import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LcuStateModule } from '@lcu-ide/lcu-state-common';
import { FathymSharedModule, LCUServiceSettings, RealTimeService } from '@lcu-ide/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FathymSharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    LcuStateModule.forRoot(),
  ],
  providers: [
    RealTimeService,
    {
      provide: LCUServiceSettings,
      useValue: <LCUServiceSettings>{
        APIRoot: `http://localhost:52235/state`,
        // APIRoot: `http://www.lowcodeunit.com/state`,
        // APIRoot: `/state`,
      }
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
