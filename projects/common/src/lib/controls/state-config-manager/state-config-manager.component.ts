import { Component, OnInit } from '@angular/core';
import { LcuStateStateManagerContext } from '../../state/lcu-state-state-manager.context';
import { LCUState } from '../../state/lcu-state.model';

@Component({
  selector: 'lcu-state-config-manager',
  templateUrl: './state-config-manager.component.html',
  styleUrls: ['./state-config-manager.component.scss']
})
export class StateConfigManagerComponent implements OnInit {
  //  Fields

  //  Properties
  public State: LCUState;

  //  Constructors
  constructor(protected state: LcuStateStateManagerContext) {}

  //  Life Cycle
  public ngOnInit() {
    this.state.Context.subscribe(state => {
      this.State = state;
    });
  }

  //  API Methods

  //  Helpers
}
