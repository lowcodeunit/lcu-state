import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateConfigManagerElementComponent } from './config-manager.component';

describe('StateConfigManagerElementComponent', () => {
  let component: StateConfigManagerElementComponent;
  let fixture: ComponentFixture<StateConfigManagerElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateConfigManagerElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateConfigManagerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
