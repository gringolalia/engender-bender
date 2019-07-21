import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootFluteComponent } from './root-flute.component';

describe('RootFluteComponent', () => {
  let component: RootFluteComponent;
  let fixture: ComponentFixture<RootFluteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootFluteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootFluteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
