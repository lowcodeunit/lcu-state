import { Component, OnInit, Injector, ViewChild, SimpleChanges } from '@angular/core';
import { LcuElementComponent, LCUElementContext } from '@lcu-ide/common';
import { LCUInfrastructureManagerState } from '../../state/infrastructure-manager/infrastructure-manager-state.model';
import { LcuStateInfrastructureManagerContext } from '../../state/infrastructure-manager/infrastructure-manager-state-manager.context';

export class DataAppsConfigManagerElementState {}

export class DataAppsConfigManagerContext extends LCUElementContext<DataAppsConfigManagerElementState> {}

export const SELECTOR_STATE_INFRASTRUCTURE_MANAGER_ELEMENT = 'lcu-state-infrastructure-manager-element';

@Component({
  selector: SELECTOR_STATE_INFRASTRUCTURE_MANAGER_ELEMENT,
  templateUrl: './infrastructure-manager.component.html',
  styleUrls: ['./infrastructure-manager.component.scss']
})
export class StateInfrastructureManagerElementComponent extends LcuElementComponent<DataAppsConfigManagerContext> implements OnInit {
  //  Fields

  //  Properties
  public State: LCUInfrastructureManagerState;

  //  Constructors
  constructor(protected injector: Injector, protected state: LcuStateInfrastructureManagerContext) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();

    this.state.Context.subscribe(state => {
      this.State = state;

      this.handleStateChanged();
    });
  }

  //  API Methods

  //  Helpers
  protected handleStateChanged() {
    // if (!this.initialized && this.Drawer) {
    //   this.Drawer.open();

    //   this.initialized = true;
    // }

    // if (this.SaveDataAppFormGroup) {
    //   if (this.State.ActiveApp) {
    //     this.SaveDataAppFormGroup.controls.name.setValue(this.State.ActiveApp.Name);

    //     this.SaveDataAppFormGroup.controls.path.setValue(this.State.ActiveApp.PathRegex);

    //     this.SaveDataAppFormGroup.controls.desc.setValue(this.State.ActiveApp.Description);
    //   } else {
    //     this.SaveDataAppFormGroup.reset();
    //   }
    // }

    // if (this.DAFViewAppFormGroup) {
    //   if (this.State.ActiveView) {
    //     this.DAFViewAppFormGroup.controls.npmPkg.setValue(this.State.ActiveView.NPMPackage);

    //     this.DAFViewAppFormGroup.controls.pkgVer.setValue(this.State.ActiveView.PackageVersion);
    //   } else {
    //     this.SaveDataAppFormGroup.reset();
    //   }
    // }
  }
}
