import { Injectable } from '@angular/core';
import { StateManagerContext } from '@lcu-ide/common';
import { LCUState, LCUStateConfig, LCUStateAction } from './lcu-state.model';

@Injectable({
  providedIn: 'root'
})
export class LcuStateStateManagerContext extends StateManagerContext<LCUState> {
  //  Properties

  //  Constructors
  constructor() {
    super();
  }

  //  API Methods
  public AddAction(stateName: string, actionName: string, action: LCUStateAction) {
    this.Execute({
      Arguments: {
        Action: action,
        Name: actionName,
        State: stateName
      },
      Type: 'add-action'
    });
  }

  public Save(config: LCUStateConfig) {
    this.Execute({
      Arguments: {
        Config: config
      },
      Type: 'save-state'
    });
  }

  public SetActive(lookup: string, isSettings: boolean) {
    this.Execute({
      Arguments: {
        Lookup: lookup,
        IsSettings: isSettings
      },
      Type: 'set-active'
    });
  }

  //  Helpers
  protected defaultValue() {
    return <LCUState>{ Loading: true };
  }

  protected loadHubUrl() {
    // return '/state';
    // return 'http://www.lowcodeunit.com/state';
    return 'http://localhost:52235/state';
  }

  protected loadStateKey() {
    return 'main';
  }

  protected loadStateName() {
    return 'lcu-state';
  }
}
