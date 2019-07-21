import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldbergComponent } from './goldberg.component';

describe('GoldbergComponent', () => {
  let component: GoldbergComponent;
  let fixture: ComponentFixture<GoldbergComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldbergComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldbergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
