import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrControllerComponent } from './qr-controller.component';

describe('QrControllerComponent', () => {
  let component: QrControllerComponent;
  let fixture: ComponentFixture<QrControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
