import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LcuStateModule } from '@lcu-ide/lcu-state-common';
import { FathymSharedModule, LCUServiceSettings } from '@lcu-ide/common';
import { environment } from '../environments/environment';

export const settings = FathymSharedModule.DefaultServiceSettings(environment);

// settings.APIRoot = 'http://www.lowcodeunit.com';
// settings.APIRoot = 'http://www.habistack.com';

@NgModule({
  declarations: [AppComponent],
  imports: [FathymSharedModule.forRoot(), BrowserModule, BrowserAnimationsModule, LcuStateModule.forRoot()],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: settings
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
