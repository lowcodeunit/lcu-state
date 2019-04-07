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
  MatSelectModule,
  MatCardModule,
  MatProgressBarModule
} from '@angular/material';
import { LcuStateConfigManagerContext } from './state/config-manager/config-manager-state-manager.context';
import { StateConfigManagerElementComponent } from './elements/config-manager/config-manager.component';
import { StateInfrastructureManagerElementComponent } from './elements/infrastructure-manager/infrastructure-manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LcuStateInfrastructureManagerContext } from './state/infrastructure-manager/infrastructure-manager-state-manager.context';

@NgModule({
  declarations: [StateConfigManagerElementComponent, StateInfrastructureManagerElementComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [StateConfigManagerElementComponent, StateInfrastructureManagerElementComponent],
  entryComponents: [StateConfigManagerElementComponent, StateInfrastructureManagerElementComponent]
})
export class LcuStateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LcuStateModule,
      providers: [LcuStateConfigManagerContext, LcuStateInfrastructureManagerContext]
    };
  }
}
