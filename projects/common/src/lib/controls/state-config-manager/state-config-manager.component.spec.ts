import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateConfigManagerComponent } from './state-config-manager.component';

describe('StateConfigManagerComponent', () => {
  let component: StateConfigManagerComponent;
  let fixture: ComponentFixture<StateConfigManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateConfigManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateConfigManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
