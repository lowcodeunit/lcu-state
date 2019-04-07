import { Injectable, Injector } from '@angular/core';
import { StateManagerContext } from '@lcu-ide/common';
import { LCUInfrastructureManagerState } from './infrastructure-manager-state.model';

@Injectable({
  providedIn: 'root'
})
export class LcuStateInfrastructureManagerContext extends StateManagerContext<LCUInfrastructureManagerState> {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  API Methods
  // public SetActive(lookup: string, isSettings: boolean) {
  //   this.Execute({
  //     Arguments: {
  //       Lookup: lookup,
  //       IsSettings: isSettings
  //     },
  //     Type: 'set-active'
  //   });
  // }

  //  Helpers
  protected defaultValue() {
    return <LCUInfrastructureManagerState>{ Loading: true };
  }

  protected async loadStateKey() {
    return 'main';
  }

  protected async loadStateName() {
    return 'lcu-state-infrastructure-manager';
  }
}
