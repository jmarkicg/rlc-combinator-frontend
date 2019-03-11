import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RlcEditComponent } from './rlc-edit.component';

describe('RlcEditComponent', () => {
  let component: RlcEditComponent;
  let fixture: ComponentFixture<RlcEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RlcEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RlcEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
