import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RlcTableComponent } from './rlc-table.component';

describe('RlcTableComponent', () => {
  let component: RlcTableComponent;
  let fixture: ComponentFixture<RlcTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RlcTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RlcTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // beforeEach(async(() => { TestBed.configureTestingModule({
  //   declarations: [ LinkingToolComponent, GeneratedComponent ],
  //   imports: [MaterialModule, NoopAnimationsModule] }) .compileComponents(); }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
