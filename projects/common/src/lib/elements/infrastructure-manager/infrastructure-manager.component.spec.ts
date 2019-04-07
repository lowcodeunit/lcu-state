import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateInfrastructureManagerElementComponent } from './infrastructure-manager.component';

describe('StateConfigManagerElementComponent', () => {
  let component: StateInfrastructureManagerElementComponent;
  let fixture: ComponentFixture<StateInfrastructureManagerElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateInfrastructureManagerElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateInfrastructureManagerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
