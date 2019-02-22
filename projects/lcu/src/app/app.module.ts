import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { SELECTOR_STATE_CONFIG_MANAGER_ELEMENT, StateConfigManagerElementComponent, LcuStateModule } from '@lcu-ide/lcu-state-common';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule, LcuStateModule]
})
export class AppModule implements DoBootstrap {
  //  Constructors
  constructor(protected injector: Injector) {}

  //  Life Cycle
  public ngDoBootstrap() {
    const panel = createCustomElement(StateConfigManagerElementComponent, { injector: this.injector });

    customElements.define(SELECTOR_STATE_CONFIG_MANAGER_ELEMENT, panel);
  }
}
