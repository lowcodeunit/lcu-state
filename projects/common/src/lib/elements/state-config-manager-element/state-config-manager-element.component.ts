import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { LCUState, LCUStateConfig } from '../../state/lcu-state.model';
import { LCUElementContext, LcuElementComponent } from '@lcu-ide/common';
import { LcuStateStateManagerContext } from '../../state/lcu-state-state-manager.context';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDrawer } from '@angular/material';

export class StateConfigManagerElementState {
  public Config: LCUState;
}

export class StateConfigManagerContext extends LCUElementContext<StateConfigManagerElementState> {}

export const SELECTOR_STATE_CONFIG_MANAGER_ELEMENT = 'lcu-state-config-manager-element';

@Component({
  selector: SELECTOR_STATE_CONFIG_MANAGER_ELEMENT,
  templateUrl: './state-config-manager-element.component.html',
  styleUrls: ['./state-config-manager-element.component.scss']
})
export class StateConfigManagerElementComponent extends LcuElementComponent<StateConfigManagerContext> implements OnInit {
  //  Fields
  protected stateInit: boolean;

  //  Properties
  public get ActiveActionNames(): string[] {
    return this.State.ActiveState ? Object.keys(this.State.ActiveState.Actions) : [];
  }

  public get EnvironmentNames(): string[] {
    return this.State.ActiveState && this.State.ActiveState.Environments ? Object.keys(this.State.ActiveState.Environments) : [];
  }

  @ViewChild(MatDrawer)
  public Drawer: MatDrawer;

  public NewActionAPIRoot: string;

  public NewActionName: string;

  public NewEnvName: string;

  public NewActionSecurity: string;

  public SaveStateFormGroup: FormGroup;

  public SavingState: boolean;

  public get ShowContainer(): boolean {
    return !this.State.Loading || (this.State.States && this.State.States.length > 0);
  }

  public State: LCUState;

  //  Constructors
  constructor(protected injector: Injector, protected formBldr: FormBuilder, protected state: LcuStateStateManagerContext) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();

    this.SaveStateFormGroup = this.formBldr.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      lookup: ['', Validators.required]
    });

    this.state.Context.subscribe(state => {
      this.State = state;

      this.handleStateChange();
    });
  }

  //  API Methods
  public AddNewAction() {
    this.State.ActiveState.Actions[this.NewActionName] = { APIRoot: this.NewActionAPIRoot, Security: this.NewActionSecurity };

    this.EmitSaveState();
  }

  public AddNewEnv() {
    if (!this.State.ActiveState.Environments) {
      this.State.ActiveState.Environments = {};
    }

    if (!this.State.ActiveState.Environments[this.NewEnvName]) {
      this.State.ActiveState.Environments[this.NewEnvName] = { ServerAPIRoot: '', Security: '' };
    }

    this.EmitSaveState();
  }

  public DefaultValueChanged(defVal: string) {
    try {
      this.State.ActiveState.DefaultValue = JSON.parse(defVal);
    } catch (err) {}
  }

  public EmitSaveState() {
    this.SaveState({
      Name: this.State.ActiveState ? this.State.ActiveState.Name : this.SaveStateFormGroup.controls.name.value,
      Description: this.State.ActiveState ? this.State.ActiveState.Description : this.SaveStateFormGroup.controls.desc.value,
      Lookup: this.State.ActiveState ? this.State.ActiveState.Lookup : this.SaveStateFormGroup.controls.lookup.value,
      UseUsername: this.State.ActiveState ? this.State.ActiveState.UseUsername : false,
      DefaultValue: this.State.ActiveState ? this.State.ActiveState.DefaultValue : '',
      Actions: this.State.ActiveState ? this.State.ActiveState.Actions : {},
      ActiveEnvironment: this.State.ActiveState ? this.State.ActiveState.ActiveEnvironment : '',
      Environments: this.State.ActiveState ? this.State.ActiveState.Environments : {}
    });
  }

  public RemoveAction(actionName: string) {
    if (confirm(`Are you sure you want to remove action '${actionName}'?`)) {
      delete this.State.ActiveState.Actions[actionName];

      this.EmitSaveState();
    }
  }

  public RemoveEnv(envName: string) {
    if (confirm(`Are you sure you want to remove environment '${envName}'?`)) {
      delete this.State.ActiveState.Environments[envName];

      this.EmitSaveState();
    }
  }

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

  public ToggleSavingState() {
    this.SavingState = !this.SavingState;

    if (this.SavingState) {
      this.Select(null);
    }
  }

  //  Helpers
  protected handleStateChange() {
    if (!this.stateInit && this.Drawer) {
      this.Drawer.open();

      this.stateInit = true;
    }

    this.NewActionAPIRoot = '';

    this.NewActionName = '';

    this.NewEnvName = '';

    this.NewActionSecurity = '';

    if (this.SaveStateFormGroup) {
      if (this.State.ActiveState) {
        this.SaveStateFormGroup.controls.name.setValue(this.State.ActiveState.Name);

        this.SaveStateFormGroup.controls.lookup.setValue(this.State.ActiveState.Lookup);

        this.SaveStateFormGroup.controls.desc.setValue(this.State.ActiveState.Description);
      } else if (this.SaveStateFormGroup) {
        this.SaveStateFormGroup.controls.name.setValue('');

        this.SaveStateFormGroup.controls.lookup.setValue('');

        this.SaveStateFormGroup.controls.desc.setValue('');
      }
    }
  }
}
