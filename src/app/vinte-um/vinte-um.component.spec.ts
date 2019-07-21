import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinteUmComponent } from './vinte-um.component';

describe('VinteUmComponent', () => {
  let component: VinteUmComponent;
  let fixture: ComponentFixture<VinteUmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinteUmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinteUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
