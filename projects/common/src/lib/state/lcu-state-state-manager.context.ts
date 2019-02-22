import { Injectable } from '@angular/core';
import { StateManagerContext } from '@lcu-ide/common';
import { LCUState } from './lcu-state.model';

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
  public Add(name: string) {
    this.Execute({
      Arguments: {
        Name: name
      },
      Type: 'add'
    });
  }

  public SetActive(name: string) {
    this.Execute({
      Arguments: {
        Name: name
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
