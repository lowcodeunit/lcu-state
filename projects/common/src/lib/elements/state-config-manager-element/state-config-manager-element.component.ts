import { Component, OnInit, Injector } from '@angular/core';
import { LCUState, LCUStateConfig } from '../../state/lcu-state.model';
import { LCUElementContext, LcuElementComponent } from '@lcu-ide/common';
import { LcuStateStateManagerContext } from '../../state/lcu-state-state-manager.context';

export class StateConfigManagerElementState {
  public Config: LCUState;
}

export class ContentElementContext extends LCUElementContext<StateConfigManagerElementState> {}

export const SELECTOR_STATE_CONFIG_MANAGER_ELEMENT = 'lcu-state-config-manager-element';

@Component({
  selector: SELECTOR_STATE_CONFIG_MANAGER_ELEMENT,
  templateUrl: './state-config-manager-element.component.html',
  styleUrls: ['./state-config-manager-element.component.scss']
})
export class StateConfigManagerElementComponent extends LcuElementComponent<ContentElementContext> implements OnInit {
  //  Properties
  public State: LCUState;

  //  Constructors
  constructor(protected injector: Injector, protected state: LcuStateStateManagerContext) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();

    this.state.Context.subscribe(state => {
      this.State = state;
    });
  }

  //  API Methods
  public SaveState(config: LCUStateConfig) {
    this.State.Loading = true;

    this.state.Save(config);
  }

  public Select(state: string) {
    this.State.Loading = true;

    this.state.SetActive(state, false);
  }

  public SelectSettings(state: string) {
    this.State.Loading = true;

    this.state.SetActive(state, true);
  }

  public Settings() {
    // this.State.Loading = true;
  }
}
