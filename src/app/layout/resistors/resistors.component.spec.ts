import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorsComponent } from './resistors.component';

describe('ResistorsComponent', () => {
  let component: ResistorsComponent;
  let fixture: ComponentFixture<ResistorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResistorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResistorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
