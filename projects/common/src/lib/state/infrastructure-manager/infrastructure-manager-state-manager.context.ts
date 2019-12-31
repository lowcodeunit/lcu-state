import { Injectable, Injector } from '@angular/core';
import { StateManagerContext } from '@lcu/common';
import { InfrastructureManagerState } from './infrastructure-manager-state.model';

@Injectable({
  providedIn: 'root'
})
export class LcuStateInfrastructureManagerContext extends StateManagerContext<InfrastructureManagerState> {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  API Methods
  public EnableInfrastructure() {
    this.Execute({
      Arguments: {
        DeploymentTemplate: ''
      },
      Type: 'enable-infrastructure'
    });
  }

  //  Helpers
  protected defaultValue() {
    return <InfrastructureManagerState>{ Loading: true };
  }

  protected async loadStateKey() {
    return 'main';
  }

  protected async loadStateName() {
    return 'lcu-state-infrastructure-manager';
  }
}
