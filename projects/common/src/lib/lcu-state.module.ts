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
  MatExpansionModule,
  MatSlideToggleModule,
  MatSelectModule
} from '@angular/material';
import { LcuStateStateManagerContext } from './state/lcu-state-state-manager.context';
import { StateConfigManagerElementComponent } from './elements/state-config-manager-element/state-config-manager-element.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [StateConfigManagerElementComponent],
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
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [StateConfigManagerElementComponent],
  entryComponents: [StateConfigManagerElementComponent]
})
export class LcuStateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LcuStateModule,
      providers: [LcuStateStateManagerContext]
    };
  }
}
