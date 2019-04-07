import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  SELECTOR_STATE_CONFIG_MANAGER_ELEMENT,
  SELECTOR_STATE_INFRASTRUCTURE_MANAGER_ELEMENT,
  StateConfigManagerElementComponent,
  LcuStateModule,
  StateInfrastructureManagerElementComponent
} from '@lcu-ide/lcu-state-common';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserAnimationsModule, BrowserModule, LcuStateModule]
})
export class AppModule implements DoBootstrap {
  //  Constructors
  constructor(protected injector: Injector) {}

  //  Life Cycle
  public ngDoBootstrap() {
    const cfgMgr = createCustomElement(StateConfigManagerElementComponent, { injector: this.injector });

    customElements.define(SELECTOR_STATE_CONFIG_MANAGER_ELEMENT, cfgMgr);

    const infraMgr = createCustomElement(StateInfrastructureManagerElementComponent, { injector: this.injector });

    customElements.define(SELECTOR_STATE_INFRASTRUCTURE_MANAGER_ELEMENT, infraMgr);
  }
}
