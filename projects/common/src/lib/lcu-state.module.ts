import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';
import { StateConfigManagerComponent } from './controls/state-config-manager/state-config-manager.component';
import { LcuStateStateManagerContext } from './state/lcu-state-state-manager.context';
import { StateConfigManagerElementComponent } from './elements/state-config-manager-element/state-config-manager-element.component';

@NgModule({
  declarations: [StateConfigManagerComponent, StateConfigManagerElementComponent],
  imports: [CommonModule, MatToolbarModule],
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
