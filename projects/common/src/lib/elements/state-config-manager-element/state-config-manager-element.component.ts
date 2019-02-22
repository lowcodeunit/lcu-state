import { Component, OnInit, Injector } from '@angular/core';
import { LCUState } from '../../state/lcu-state.model';
import { LCUElementContext, LcuElementComponent } from '@lcu-ide/common';

export class StateConfigManagerElementState {
  public Config: LCUState;
}

export class ContentElementContext  extends LCUElementContext<StateConfigManagerElementState> {
}

export const SELECTOR_STATE_CONFIG_MANAGER_ELEMENT = 'lcu-state-config-manager-element';

@Component({
  selector: SELECTOR_STATE_CONFIG_MANAGER_ELEMENT,
  templateUrl: './state-config-manager-element.component.html',
  styleUrls: ['./state-config-manager-element.component.scss']
})
export class StateConfigManagerElementComponent extends LcuElementComponent<ContentElementContext> {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  Life Cycle
}
