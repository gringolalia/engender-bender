import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngenhocasComponent } from './engenhocas.component';

describe('EngenhocasComponent', () => {
  let component: EngenhocasComponent;
  let fixture: ComponentFixture<EngenhocasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngenhocasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngenhocasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
