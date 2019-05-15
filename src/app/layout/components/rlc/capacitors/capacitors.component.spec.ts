import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitorsComponent } from './capacitors.component';

describe('CapacitorsComponent', () => {
  let component: CapacitorsComponent;
  let fixture: ComponentFixture<CapacitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
