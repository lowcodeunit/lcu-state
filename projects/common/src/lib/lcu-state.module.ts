import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatExpansionModule
} from '@angular/material';
import { StateConfigManagerComponent } from './controls/state-config-manager/state-config-manager.component';
import { LcuStateStateManagerContext } from './state/lcu-state-state-manager.context';
import { StateConfigManagerElementComponent } from './elements/state-config-manager-element/state-config-manager-element.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RealTimeService } from '@lcu-ide/common';

@NgModule({
  declarations: [StateConfigManagerComponent, StateConfigManagerElementComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [StateConfigManagerComponent, StateConfigManagerElementComponent],
  entryComponents: [StateConfigManagerComponent, StateConfigManagerElementComponent]
})
export class LcuStateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LcuStateModule,
      providers: [LcuStateStateManagerContext]
    };
  }
}
