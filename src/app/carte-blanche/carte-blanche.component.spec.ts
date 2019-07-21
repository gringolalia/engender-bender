import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteBlancheComponent } from './carte-blanche.component';

describe('CarteBlancheComponent', () => {
  let component: CarteBlancheComponent;
  let fixture: ComponentFixture<CarteBlancheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteBlancheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteBlancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
