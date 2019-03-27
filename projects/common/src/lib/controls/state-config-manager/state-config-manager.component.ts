import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { LCUState, LCUStateConfig } from '../../state/lcu-state.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'lcu-state-config-manager',
  templateUrl: './state-config-manager.component.html',
  styleUrls: ['./state-config-manager.component.scss']
})
export class StateConfigManagerComponent implements OnChanges, OnInit {
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

  @Output('save-state')
  public SaveState: EventEmitter<LCUStateConfig>;

  public SaveStateFormGroup: FormGroup;

  public SavingState: boolean;

  @Output('select-state')
  public Select: EventEmitter<string>;

  @Output('select-state-settings')
  public SelectSettings: EventEmitter<string>;

  @Output('settings')
  public Settings: EventEmitter<any>;

  public get ShowContainer(): boolean {
    return !this.State.Loading || (this.State.States && this.State.States.length > 0);
  }

  @Input('state')
  public State: LCUState;

  //  Constructors
  constructor(protected formBldr: FormBuilder) {
    this.SaveState = new EventEmitter();

    this.Settings = new EventEmitter();

    this.Select = new EventEmitter();

    this.SelectSettings = new EventEmitter();
  }

  //  Life Cycle
  public ngOnChanges(_: SimpleChanges) {
    if (_['State']) {
      // !this.stateInit &&
      if (this.Drawer) {
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

  public ngOnInit() {
    this.SaveStateFormGroup = this.formBldr.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      lookup: ['', Validators.required]
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
    this.SaveState.emit({
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

  public SelectState(state: string) {
    this.SavingState = false;

    this.Select.emit(state);
  }

  public SelectStateSettings(state: string) {
    this.SavingState = false;

    this.SelectSettings.emit(state);
  }

  public ToggleSavingState() {
    this.SavingState = !this.SavingState;

    if (this.SavingState) {
      this.Select.emit(null);
    }
  }

  //  Helpers
}
